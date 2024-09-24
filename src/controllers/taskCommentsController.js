import TaskComment from '../models/taskCommentsModel.js';

export const getCommentsByTaskId = async (req, res) => {
    const comments = await TaskComment.getAllByTaskId(req.params.taskId);
    res.json(comments);
};

export const createComment = async (req, res) => {
    const { comment, userId } = req.body;
    const taskId = req.params.taskId;
    const result = await TaskComment.create(taskId, comment, userId);
    res.status(201).json({ message: 'Comentario creado', commentId: result.insertId });
};

export const deleteComment = async (req, res) => {
    const result = await TaskComment.delete(req.params.id);
    if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Comentario no encontrado' });
    }
    res.json({ message: 'Comentario eliminado' });
};
