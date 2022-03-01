export interface Task {
    id             : number;
    title          : string;
    start          : Date;
    end            : Date;
    completionRatio: number;
    subtasks?      : Task[];
}

export const tasks: Task[] = [
    {
        id: 1,
        title: 'Nguyễn Hoàng Tuấn',
        start: new Date('2021-12-21 08:30:00'),
        end: new Date('2021-12-31 17:30:00'),
        completionRatio: 0.8,
    },
    {
        id: 2,
        title: 'Lê Thị Quỳnh Như',
        start: new Date('2021-12-25'),
        end: new Date('2022-01-05'),
        completionRatio: 0.6,
    },
    {
        id: 3,
        title: 'Lê Nguyễn Tuấn Anh',
        start: new Date('2021-12-22'),
        end: new Date('2022-01-05'),
        completionRatio: 0.3,
    },
];