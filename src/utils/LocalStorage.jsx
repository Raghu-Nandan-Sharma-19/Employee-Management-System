const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Monthly Report",
                "taskDescription": "Compile and finalize the monthly financial report.",
                "taskDate": "2024-11-25",
                "category": "Finance"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Team Meeting",
                "taskDescription": "Attend and present updates in the weekly team meeting.",
                "taskDate": "2024-11-20",
                "category": "Meetings"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Client Follow-Up",
                "taskDescription": "Follow up with client ABC regarding project deliverables.",
                "taskDate": "2024-11-23",
                "category": "Client"
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Design Mockups",
                "taskDescription": "Create design mockups for the upcoming product launch.",
                "taskDate": "2024-11-24",
                "category": "Design"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Market Research",
                "taskDescription": "Conduct market research for competitor analysis.",
                "taskDate": "2024-11-25",
                "category": "Research"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Complete Documentation",
                "taskDescription": "Finalize the user documentation for release.",
                "taskDate": "2024-11-18",
                "category": "Documentation"
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Code Review",
                "taskDescription": "Review the latest pull requests and provide feedback.",
                "taskDate": "2024-11-22",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Bug Fixing",
                "taskDescription": "Fix critical bugs reported in the last QA cycle.",
                "taskDate": "2024-11-23",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Attend Training",
                "taskDescription": "Participate in the cybersecurity awareness training session.",
                "taskDate": "2024-11-15",
                "category": "Training"
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Content Strategy",
                "taskDescription": "Develop a content strategy for the upcoming quarter.",
                "taskDate": "2024-11-27",
                "category": "Marketing"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Email Campaign",
                "taskDescription": "Launch the holiday email campaign for existing customers.",
                "taskDate": "2024-11-22",
                "category": "Marketing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "SEO Audit",
                "taskDescription": "Perform an SEO audit on the company website.",
                "taskDate": "2024-11-18",
                "category": "Marketing"
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Server Migration",
                "taskDescription": "Migrate servers to the new hosting provider.",
                "taskDate": "2024-11-20",
                "category": "IT"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Setup Backup System",
                "taskDescription": "Implement a backup system for all critical data.",
                "taskDate": "2024-11-28",
                "category": "IT"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Firewall Upgrade",
                "taskDescription": "Upgrade the firewall to improve network security.",
                "taskDate": "2024-11-16",
                "category": "IT"
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
}