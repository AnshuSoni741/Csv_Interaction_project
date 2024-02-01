let onload = fetch("./Data.csv")
.then((res) => {
  // console.log(res);
  return res.text();
})
.then((data) => {
  //data in scrap like simple text
  // console.log(data);

  //above data in stored row wise in a array each element of this array contains all element of a row
  // console.log(data.split(/\r?\n|\r/));

  //above data in stored in row wise in array as element and each element in this array is an sub array elements in row(each element of sub array return as colunm data in that array)
  let result = data.split(/\r?\n|\r/).map((e) => {
    return e.split(",");
  });
  // console.log(result);

  //fetching data row wise and then each column from a particular row

  //here result contains an array of data which contain data of csv file

  
  //creation of rows to add as html
  let i = 0;
  //below loop is fetching array containing data of csv file row by row
  result.forEach((r) => {
    //creation of colums with inner textdata with inner html as text
    let c = "";
    if (i === 0) {
      c = r
        .map((e) => {
          return `<th>${e}</th>`;
        })
        .join("");
    } else {
      c = r
        .map((e) => {
          return `<td>${e}</td>`;
        })
        .join("");
    }

    //here c is an combined column with inner text for an row
    //console.log(c);

    //adding column inner text to row after combining
    ce = document.createElement("tr");
    ce.innerHTML = c;
    // console.log(ce);

    //   adding rows inner text to table
    if (ce.innerText !== "") {
      document.querySelector("table").appendChild(ce);
    }
    //   console.log(c);
    i++;
  });
});