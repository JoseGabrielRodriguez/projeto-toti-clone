import { pool } from '../config/db.js';

const TaskComment = {
    getAllByTaskId: async (taskId) => {
        const [rows] = await pool.query('SELECT * FROM task_comments WHERE task_id = ?', [taskId]);
        return rows;
    },

    create: async (taskId, comment, userId) => {
        const [result] = await pool.query(
            'INSERT INTO task_comments (task_id, comment, user_id, created_at) VALUES (?, ?, ?, NOW())',
            [taskId, comment, userId]
        );
        return result;
    },

    delete: async (id) => {
        const [result] = await pool.query('DELETE FROM task_comments WHERE id = ?', [id]);
        return result;
    },
};

export default TaskComment;
