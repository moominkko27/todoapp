
/*<form>
  <div class="form-group">
    <label for="exampleInputEmail1">タスク</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>*/



/*追加ボタン作成
const addTask = (task) => {
  //入力したタスクを追加・表示
  const listItem = document.createElement('li');
  const ShowItem = taskList.appendChild(listItem);
  ShowItem.innerHTML = task;
};*/

// 取得用API実行メソッド
const httpGet = async function (url) {
  try {
    const response = await fetch(url, {
      method: "GET", // GET
    });
    return response.json(); // JSON のレスポンスを JavaScript のオブジェクトに変換
  } catch (err) {
    console.log(err);
  }
};

// 登録用API実行メソッド
const httpPost = async function (url, data) {
  console.log(url);
  console.log(data);
  try {
    const response = await fetch(url, {
      method: "POST", // POST
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json(); // JSON のレスポンスを JavaScript のオブジェクトに変換
  } catch (err) {
    console.log(err);
  }
};

// 更新用API実行メソッド
const httpUpdate = async function (url, data) {
  try {
    const response = await fetch(url, {
      method: "PATCH", // PATCH
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json(); // JSON のレスポンスを JavaScript のオブジェクトに変換
  } catch (err) {
    console.log(err);
  }
};

// 削除用API実行メソッド
const httpDelete = async function (url) {
  try {
    const response = await fetch(url, {
      method: "DELETE", // DELETE
    });
    return response.json(); // JSON のレスポンスを JavaScript のオブジェクトに変換
  } catch (err) {
    console.log(err);
  }
};
