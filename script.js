  // 1. Считываем данные (с помощью регулярного выражения) из тега P в объект состоящий из трех свойств.
  var elem = document.getElementById("1"); 
  var str = elem.textContent; 
  var object = {}; 
  
  // 2. Выводим полученную информацию в консоль.
  console.log('тег p:', str); 
  
  // 3. Производим отрисовку страницы.
  str = str.replace(/[\n\r]+/g, '').split(/\;/);

  for (var i = 0; i < str.length; i++)
    {
      var el = str[i].trim().split(/\:/); // Для того, чтобы не ломалось от ":".
      var name = el[0];
      var value = el.slice(1).join(':'); // Возвращаем ":".
      
      switch(name) {
        case 'element': 
          object.Tag = value.toLowerCase(); // Теги должны быть маленькими буквами.
          break;
        case 'text':
          object.Text = value;
          break;
        case 'count':
          object.Count = parseInt(value);
          break;
      }
    }
    
  console.log('считанные данные:', object); 
  
  // 3.1 Удаляем <p> (тег и его содержимое соответственно).
  document.body.removeChild(elem); 
  
  // 3.2 Создаем новую разметку по правилам полученным из тега P.
  for(var i = 0; i < object.Count; i++) 
    {
    var new_elem = document.createElement(object.Tag); 
    var new_text = document.createTextNode(object.Text); 
    new_elem.appendChild(new_text); 
    document.body.appendChild(new_elem); 
    }
  
  // Не использовать innerHTML. 
