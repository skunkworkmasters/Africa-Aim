import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('Supabase URL:', supabaseUrl)
console.log('Supabase Anon Key:', supabaseAnonKey ? 'Key is present' : 'Key is missing')
console.log('Environment variables:', import.meta.env)

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase credentials. Please check your .env file.')
}

// Add debug options to the Supabase client
const options = {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  debug: true
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, options)

// Test the connection and authentication
const testConnection = async () => {
  try {
    // Check authentication status
    const { data: authData, error: authError } = await supabase.auth.getUser()
    
    if (authError) {
      console.error('Supabase authentication check failed:', authError)
    } else {
      console.log('Supabase authentication check:', authData.user ? 'User is authenticated' : 'No authenticated user')
      if (authData.user) {
        console.log('Authenticated user details:', {
          id: authData.user.id,
          email: authData.user.email,
          role: authData.user.role
        })
      }
    }
    
    // Test database connection
    const { count, error } = await supabase
      .from('posts')
      .select('count', { count: 'exact', head: true })
    
    if (error) {
      console.error('Supabase database connection test failed:', error)
      
      // Check if this is a permission error (RLS)
      if (error.code === '42501') {
        console.error('This is a Row-Level Security (RLS) permission error. You need to update your Supabase RLS policies.')
      }
    } else {
      console.log('Supabase database connection test successful. Post count:', count)
    }
    
    // Test inserting a post
    if (authData.user) {
      console.log('Attempting to insert a test post...')
      const { error: insertError } = await supabase
        .from('posts')
        .insert({
          id: 999999, // Using a numeric ID that's unlikely to conflict
          content: 'Test post from connection test',
          user_id: authData.user.id,
          inserted_at: new Date().toISOString() // Changed from created_at to inserted_at
        })
        .select()
      
      if (insertError) {
        console.error('Test post insertion failed:', insertError)
        
        if (insertError.code === '42501') {
          console.error('This is a Row-Level Security (RLS) permission error. You need to update your Supabase RLS policies.')
          console.error('Specifically, you need a policy that allows authenticated users to insert records into the posts table.')
        }
      } else {
        console.log('Test post insertion successful!')
      }
    }
  } catch (err) {
    console.error('Supabase connection test error:', err)
  }
}

testConnection()
