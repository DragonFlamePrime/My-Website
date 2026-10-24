now = new date();
localtime = now.tostring();
utctime = now.toGMTstring();
document.write ("<p><strong>local time:</strong> " + localtime + "</p>");
document.write ("<p><strong>UTC time:</strong> " + utctime + "</p>");