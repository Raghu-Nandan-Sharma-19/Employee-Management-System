const defaultData = {
    employees: [
        {
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
            password: "123",
            tasks: [],
            taskCounts: {
                newTask: 0,
                active: 0,
                completed: 0,
                failed: 0
            }
        },
        {
            firstName: "Jane",
            lastName: "Smith",
            email: "jane@example.com",
            password: "123",
            tasks: [],
            taskCounts: {
                newTask: 0,
                active: 0,
                completed: 0,
                failed: 0
            }
        }
    ]
}

export const setLocalStorage = () => {
    if (!localStorage.getItem('employees')) {
        localStorage.setItem('employees', JSON.stringify(defaultData.employees))
    }
}

export const getLocalStorage = () => {
    try {
        const employees = JSON.parse(localStorage.getItem('employees'))
        return { employees: employees || defaultData.employees }
    } catch (error) {
        console.error('Error parsing localStorage:', error)
        return { employees: defaultData.employees }
    }
}

export const updateLocalStorage = (newEmployees) => {
    localStorage.setItem('employees', JSON.stringify(newEmployees))
} 