document.querySelector("#add").onclick = function () {
	const todo = Math.random().toString(35).substring(2, 26);

	document.querySelector("#table").innerHTML += `	<div id='table' class="table">
  <table>
    <tr>
      <td>O</td>
      <td>${todo} ${todo} ${todo}</td>
      <td>
        <button style="background-color: rgb(51, 163, 233)">In Progress</button>
      </td>
    </tr>
  </table>
</div>`;
};
