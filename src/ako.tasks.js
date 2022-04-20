//新規登録処理

const mysql = require("mysql2/promise"); //この3と4は一回書いておけばいいもの
const config = require("../config.js");

/**
 * タスクを新規登録する API
 *
 * @returns レスポンス JSON
 */
postTasks = async function (body) { //bodyはreq.bodyを引き出すためのもの
  let connection = null;
  try {
    connection = await mysql.createConnection(config.dbSetting);
    // ここに SQL を記述する
    const sql =
      "INSERT INTO todoapp.t_task (task_name, deadline, category_id) VALUES (?,?,?);"; //16.17はmysqlの書くやり方と同じ。新規登録だからINSERT INTO。todoapp.t_taskはテーブル名。(task_name~)はDBのカラム名。(???)は(task_name~)と同じ順で値を入れる。
    let d = [body.taskName, body.deadline, body.category]; //let dは上の(???)の順に入れていて変数で定義している。
    const [rows, fields] = await connection.query(sql, d); //最後のdは18行目のlet dの配列を表してる。

    // console.log(rows);
    return rows;
  } catch (err) {
    console.log(err);
  } finally {
    connection.end();
  }
};

exports.postTasks = postTasks;

/**
 * タスクを一覧取得するAPI
 * 
 * @returns レスポンスJSON
 */
getTasks = async function () {
    let connection = null;
    try {
      connection = await mysql.createConnection(config.dbSetting);
      //ここにSQLを記述
      const sql=
        "SELECT t_task.id, t_task.category_id, m_category.category_name, t_task.task_name, t_task.deadline, t_task.task_status, t_task.updated_at, t_task.created_at FROM t_task LEFT JOIN m_category ON t_task.category_id = m_category.id;";
      const [rows, fields] = await connection.query(sql);
      return rows;
    } catch (err) {
      console.log(err);
    } finally {
      connection.end();
    }
};
        
/**
 * タスクを１件取得する API
 *
 * @returns レスポンス JSON
 */
getTasksId = async function (id) {
  let connection = null;
  try {
    connection = await mysql.createConnection(config.dbSetting);
    // ここに SQL を記述する
    const sql =
      "SELECT t_task.id, t_task.category_id, m_category.category_name, t_task.task_name, t_task.deadline, t_task.task_status, t_task.updated_at, t_task.created_at FROM t_task LEFT JOIN m_category ON t_task.category_id = m_category.id WHERE t_task.id = ?";
    let d = [id];
    const [rows, fields] = await connection.query(sql, d);
    return rows;
  } catch (err) {
    console.log(err);
  } finally {
    connection.end();
  }
};
  
/**
 * タスクを1件更新するAPI
 * 
 * @returns レスポンス　JSON
 */
patchTasksId = async function (id, body) {
    let connection = null;
    try {
        connection = await mysql.createConnection(config.dbSetting);
     //ここにSQLを記述
        const sql = 
          "UPDATE t_task SET task_name=?, deadline=?, category_id=?, task_status=?, updated_at=?, WHERE id=?;";
        let d = [
          body.taskName,
          body.deadline,
          body.category,
          body.status,
          new Date(),
          id,
        ];
        const [rows, fields] = await connection.query(sql, d);
        return rows;
    }   catch (err) {
        console.log(err);
    }   finally {
        connection.end();
    }
};    


exports.getTasksId = getTasksId;
exports.postTasks = postTasks;
exports.patchTasksId = patchTasksId;