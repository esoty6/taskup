export type Task = {
  id: number | string;
  userId: number | string;
  title: string;
  summary: string;
  dueDate: string;
};

export type NewTask = Omit<Task, 'id' | 'userId'>;
