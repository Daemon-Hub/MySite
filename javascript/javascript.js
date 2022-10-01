function textarea_resize(event, line_height, min_line_count) {
  var min_line_height = min_line_count * line_height;
  var obj = event.target;
  var div = document.getElementById(obj.id + '_div');
  div.innerHTML = obj.value;
  var obj_height = div.offsetHeight;
  if (event.keyCode == 13)
    obj_height += line_height;
  else if (obj_height < min_line_height)
    obj_height = min_line_height;
  obj.style.height = obj_height + 'px';
}