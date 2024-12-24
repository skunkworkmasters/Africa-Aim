import React from 'react';
import { MoreHorizontal, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'AI-Powered Agriculture Solution',
    client: 'TechFarm Ltd',
    status: 'In Progress',
    progress: 75,
    dueDate: '2024-03-15',
  },
  {
    id: 2,
    name: 'ML Model Implementation',
    client: 'DataTech Solutions',
    status: 'Planning',
    progress: 25,
    dueDate: '2024-03-20',
  },
  {
    id: 3,
    name: 'Computer Vision System',
    client: 'Vision AI Corp',
    status: 'Review',
    progress: 90,
    dueDate: '2024-03-10',
  },
];

const ProjectsOverview = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-between p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
          Active Projects
        </h2>
        <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
          View All
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900/50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Project
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Progress
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Due Date
              </th>
              <th className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {project.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {project.client}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-500' : ''}
                    ${project.status === 'Planning' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-500' : ''}
                    ${project.status === 'Review' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-500' : ''}
                  `}>
                    {project.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 dark:bg-purple-500 h-2.5 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {new Date(project.dueDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-purple-600 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsOverview;