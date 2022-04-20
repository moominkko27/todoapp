var express = require("express");
var router = express.Router();

const tasks = require("../../src/ako.tasks.js");

/*タスクを登録するルーティング*/
router.post("/tasks", async function (req, res, next) {
    const postTasks = await tasks.postTasks(req.body);
    res.send(postTasks);
});
//async functionはDBに接続するための処理でtasksを待ってから処理をする用
//postTasksは後で呼び出すtasks
//req.bodyは新規登録の選択肢を呼び出すもの。入力フォームの値をサーバー側のAPIにpostする。

/* タスクを1件取するルーティング */
router.get("/tasks/:id", async function (req, res, next) {
    const getTasksId = await tasks.getTasksId(req.params.id);
    res.send(getTasksId);
});

/*タスク一覧を取得*/
router.get("/tasks", async function (req, res, next) {
    const getTask = await tasks.getTasks();
    res.send(getTasks);
});

/*タスクを1件更新するルーティング*/
router.patch("/tasks/:id", async function (req, res, next) {
    const patchTasksId = await tasks.patchTasksId(req.params.id, req.body);
    res.send(patchTasksId);
});