window.onload = function() {
var submitButton = document.getElementById('submit');

submitButton.onclick = function() {	
var name = document.getElementById('name'),
	surname = document.getElementById('surname'),
	email = document.getElementById('email'),
	birthday = document.getElementById('datepicker'),
	text = document.getElementById('text'),
	dayMonthYear = birthday.value.split('/'),
	day = dayMonthYear[1],
	month = dayMonthYear[0],
	year = dayMonthYear[2],
	modal = document.getElementById('modal'),
	wind = document.getElementById('wind'),
	buttonOK = document.getElementById('buttonOK'),
	body = document.body,
	docElem = document.documentElement,
	scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop,
	scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft,
	clientTop = docElem.clientTop || body.clientTop || 0,
    clientLeft = docElem.clientLeft || body.clientLeft || 0,
	clientHeight = docElem.clientHeight || body.clientHeight,
	clientWidth = docElem.clientWidth || body.clientWidth,
	parentInputs = document.getElementById('contacts'),
	placeHolderElem = parentInputs.getElementsByTagName('input'),
	dateRegExp = /^(?:(0[1-9]|1[012])[\/](0[1-9]|[12][0-9]|3[01])[\/](19|20)[0-9]{2})$/,
	emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

			//Function that create customs alert window
			function showAlert() {
					modal.style.display = '';
					modal.style.width = clientWidth + scrollLeft + 'px';
					modal.style.height = clientHeight + scrollTop + 'px';
					modal.setAttribute('class','modal');

						wind.style.top = scrollTop + (parseInt(clientHeight/2)) - 75 + 'px';
						wind.style.left = (parseInt(clientWidth/2)) - 225 + 'px';
						wind.setAttribute('class','wind');					
						body.style.overflow = 'hidden';

					 buttonOK.onclick = function() {
						 (function() {
							modal.style.display = 'none';
							body.style.overflow = '';
						 })();
					 }
			}

					// Function that add class into element
				    function addClass(el, cls) {
						for(var c = el.className.split(' '),i=c.length-1; i>=0; i--) {
							if (c[i] == cls) return;
						}
					if (el.className == "") el.className = cls
					else el.className += ' '+cls
					}

								// Function that remove class into element
								function removeClass(el, cls) {
								  for(var c = el.className.split(' '),i=c.length-1; i>=0; i--) {
										if (c[i] == cls) c.splice(i,1);
								}
									el.className = c.join(' ');	
								}

					// Function that check if element has class or no, return true or false
					function hasClass(el, cls) {
						for(var c = el.className.split(' '),i=c.length-1; i>=0; i--) {
							if (c[i] == cls) return true;
							}
					}			

					//Function that validate form
					function validate() {
					
							removeClass(name, 'error');
							if (name.value == '') {
								addClass(name, 'error');
								name.onfocus = function() {
									removeClass(this, 'error');
								}
							}

									removeClass(surname, 'error');
									if (surname.value == '') {
										addClass(surname, 'error');
										surname.onfocus = function() {
											removeClass(this, 'error');
										}
									}

											removeClass(email, 'error');
											if (email.value.toLowerCase().search(emailRegExp) != 0) {
												addClass(email, 'error');
												email.onfocus = function() {
													removeClass(this, 'error');
												}
											}

									removeClass(text, 'error');
									if (text.value == '') {
										text.onfocus = function() {
											removeClass(this, 'error');
										}
										addClass(text, 'error');
									}
							  
							removeClass(birthday, 'error');
							if(birthday.value.search(dateRegExp) != 0) {
								addClass(birthday, 'error');
								birthday.onfocus = function() {
									removeClass(this, 'error');
								}
							}
					}
					
					validate();
					
				// Function that send form with GET request AJAX
        		function sendForm() {
				
					var src = 'https://docs.google.com/forms/d/18eRzNyAFSxrOVs1Ryt4oEKMcsJP2h5G2N0NrG8Jzgc8/formResponse?embedded=true/' + 
						'entry.1737499337=' + name.value + 
						'&entry.1172914762=' + surname.value + 
						'&entry.1694883095=' + email.value + 
						'&entry.1159372787_day=' + day + 
						'&entry.1159372787_month=' + month + 
						'&entry.1159372787_year=' + year + 
						'&entry.2129877866=' + text.value + 
						'&entry_1737499337=' + name.value;
					
						if(hasClass(name, 'error') || hasClass(surname, 'error') || hasClass(email, 'error') || hasClass(birthday, 'error') || hasClass(text, 'error')) {							
							return;
						}
											
							var xhr = new XMLHttpRequest();
								xhr.open('GET', src, true);
 
								xhr.onreadystatechange = function() {
					
									if (xhr.readyState != 4) return;
 
								if (xhr.status != 200) {
								  showAlert();
								  return;
								}
								showAlert();
								}
					xhr.send(null);
					
					for(i = 0; i < placeHolderElem.length - 1; i++) {
						placeHolderElem[i].value = '';
					}
					text.value = '';
				}												
	sendForm();
	}
}