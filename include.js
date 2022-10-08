window.onload=function(){var header = document.createElement("header");
header.innerHTML = `
		<ul id=headerul>
				<li class="head"> <a href="https://haru-ymth.github.io/" class="nav"><img src="https://haru-ymth.github.io/favicon.png" width="35px" height="35px" id="icon"></a> </li>
				<li class="head"><a href="https://haru-ymth.github.io/" class="nav">yamaguchi03</a></li>
				<li class="head"> <a href="https://haru-ymth.github.io/others" class="nav">その他</a> </li>
		</ul>`;
var footer=document.createElement("footer");
footer.innerHTML=`
&copy;&nbsp;2022&nbsp;yamaguchi03
`;
var head=document.getElementsByTagName("head")[0];
head.before(header);
var html=document.getElementsByTagName("html")[0];
html.appendChild(footer);
			};
var theme=document.createElement("div");
theme.setAttribute("id","theme");
theme.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="480" zoomAndPan="magnify" viewBox="0 0 360 269.999989" height="360" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="7a734988ef"><path d="M 126 81 L 234 81 L 234 189 L 126 189 Z M 126 81 " clip-rule="nonzero"/></clipPath></defs><path fill="#FFFFFF" d="M 181.90625 155.417969 C 181.90625 156.371094 180.953125 157.324219 180 157.324219 C 173.894531 157.324219 168.167969 154.84375 164.351562 150.835938 C 160.347656 146.832031 157.867188 141.296875 157.867188 135.191406 C 157.867188 129.085938 160.347656 123.550781 164.351562 119.542969 C 168.359375 115.535156 173.894531 113.054688 180 113.054688 C 180.953125 113.054688 181.90625 114.011719 181.90625 114.964844 C 181.90625 128.128906 181.90625 141.871094 181.90625 155.417969 Z M 201.753906 101.417969 C 201.179688 102.371094 200.035156 102.753906 199.082031 102.179688 C 198.128906 101.609375 197.9375 100.460938 198.507812 99.507812 L 204.613281 89.203125 C 205.1875 88.25 206.332031 88.058594 207.285156 88.632812 C 208.242188 89.203125 208.429688 90.351562 207.859375 91.304688 Z M 215.683594 116.683594 C 214.726562 117.253906 213.582031 116.871094 213.203125 115.917969 C 212.628906 114.964844 213.011719 113.820312 213.964844 113.246094 L 224.269531 107.523438 C 225.222656 106.949219 226.367188 107.332031 226.941406 108.285156 C 227.511719 109.242188 227.128906 110.386719 226.175781 110.957031 Z M 220.070312 136.90625 C 219.117188 136.90625 218.164062 135.953125 218.164062 135 C 218.164062 133.855469 219.117188 133.09375 220.070312 133.09375 L 231.902344 133.28125 C 232.855469 133.28125 233.808594 134.238281 233.808594 135.191406 C 233.808594 136.335938 232.855469 137.097656 231.902344 137.097656 Z M 213.582031 156.753906 C 212.628906 156.179688 212.4375 155.035156 213.011719 154.082031 C 213.582031 153.128906 214.726562 152.9375 215.683594 153.507812 L 225.796875 159.425781 C 226.75 159.996094 226.941406 161.140625 226.367188 162.09375 C 225.796875 163.050781 224.648438 163.242188 223.695312 162.667969 Z M 198.316406 170.683594 C 197.746094 169.726562 198.128906 168.582031 199.082031 168.011719 C 200.035156 167.4375 201.179688 167.820312 201.753906 168.773438 L 207.476562 179.078125 C 208.050781 180.03125 207.667969 181.175781 206.714844 181.558594 C 205.757812 182.128906 204.613281 181.75 204.042969 180.796875 Z M 178.09375 175.070312 C 178.09375 174.117188 179.046875 173.164062 180 173.164062 C 180.953125 173.164062 181.90625 174.117188 181.90625 175.070312 L 181.71875 186.902344 C 181.71875 188.046875 180.761719 188.808594 179.808594 188.808594 C 178.664062 188.808594 177.902344 187.855469 177.902344 186.902344 Z M 158.246094 168.582031 C 158.820312 167.628906 159.964844 167.246094 160.917969 167.820312 C 161.871094 168.390625 162.0625 169.535156 161.492188 170.492188 L 155.574219 180.796875 C 155.003906 181.75 153.859375 181.941406 152.90625 181.367188 C 151.949219 180.796875 151.757812 179.648438 152.140625 178.695312 Z M 144.316406 153.316406 C 145.273438 152.746094 146.417969 153.128906 146.988281 154.082031 C 147.5625 155.035156 147.179688 156.179688 146.226562 156.753906 L 135.921875 162.476562 C 134.96875 163.050781 133.824219 162.667969 133.25 161.714844 C 132.679688 160.757812 133.058594 159.613281 134.015625 159.042969 Z M 139.929688 133.09375 C 141.074219 133.09375 141.835938 134.046875 141.835938 135 C 141.835938 136.144531 140.882812 136.90625 139.929688 136.90625 L 128.097656 136.71875 C 127.144531 136.71875 126.191406 135.761719 126.191406 134.808594 C 126.191406 133.664062 127.144531 132.902344 128.097656 132.902344 Z M 146.417969 113.246094 C 147.371094 113.820312 147.5625 114.964844 146.988281 115.917969 C 146.417969 116.871094 145.273438 117.0625 144.316406 116.492188 L 134.203125 110.574219 C 133.25 110.003906 133.058594 108.859375 133.632812 107.90625 C 134.203125 106.949219 135.351562 106.757812 136.304688 107.332031 Z M 161.683594 99.316406 C 162.253906 100.273438 161.871094 101.417969 160.917969 101.988281 C 159.964844 102.5625 158.820312 102.179688 158.246094 101.226562 L 152.523438 90.921875 C 151.949219 89.96875 152.332031 88.824219 153.285156 88.25 C 154.242188 87.679688 155.386719 88.058594 155.957031 89.015625 Z M 181.90625 94.929688 C 181.90625 95.882812 180.953125 96.835938 180 96.835938 C 178.855469 96.835938 178.09375 95.882812 178.09375 94.929688 L 178.28125 83.097656 C 178.28125 81.953125 179.238281 81.191406 180.191406 81.191406 C 181.144531 81.191406 182.097656 82.144531 182.097656 83.097656 Z M 180 103.515625 C 188.585938 103.515625 196.601562 106.949219 202.324219 112.675781 C 208.050781 118.398438 211.484375 126.222656 211.484375 134.808594 C 211.484375 143.585938 208.050781 151.410156 202.324219 157.132812 C 196.601562 162.859375 188.777344 166.292969 180 166.292969 C 171.222656 166.292969 163.398438 162.859375 157.675781 157.132812 C 151.949219 151.410156 148.515625 143.585938 148.515625 134.808594 C 148.515625 126.222656 151.949219 118.398438 157.675781 112.675781 C 163.398438 107.140625 171.222656 103.515625 180 103.515625 Z M 199.464844 115.535156 C 194.5 110.574219 187.632812 107.523438 180 107.523438 C 172.367188 107.523438 165.5 110.574219 160.535156 115.535156 C 155.574219 120.5 152.332031 127.367188 152.332031 135 C 152.332031 142.632812 155.386719 149.5 160.535156 154.652344 C 165.5 159.613281 172.367188 162.667969 180 162.667969 C 187.632812 162.667969 194.5 159.613281 199.464844 154.652344 C 204.425781 149.691406 207.476562 142.632812 207.476562 135 C 207.476562 127.367188 204.613281 120.5 199.464844 115.535156 Z M 178.09375 153.316406 C 178.09375 141.105469 178.09375 128.894531 178.09375 116.683594 C 173.703125 117.0625 169.886719 118.972656 167.023438 122.023438 C 163.589844 125.269531 161.683594 129.847656 161.683594 135 C 161.683594 140.152344 163.78125 144.730469 167.023438 147.976562 C 169.886719 150.835938 173.894531 152.9375 178.09375 153.316406 Z M 178.09375 153.316406 " fill-opacity="1" fill-rule="nonzero"/><g clip-path="url(#7a734988ef)"><path stroke-linecap="butt" transform="matrix(1.908127, 0, 0, 1.908127, 118.939927, 73.939924)" fill="none" stroke-linejoin="miter" d="M 32.99902 42.700534 C 32.99902 43.200042 32.499512 43.699551 32.000004 43.699551 C 28.800285 43.699551 25.799142 42.399601 23.799063 40.29921 C 21.700719 38.200867 20.400769 35.300035 20.400769 32.100316 C 20.400769 28.900598 21.700719 25.999766 23.799063 23.899375 C 25.899453 21.798985 28.800285 20.499035 32.000004 20.499035 C 32.499512 20.499035 32.99902 21.000591 32.99902 21.500099 C 32.99902 28.399043 32.99902 35.600968 32.99902 42.700534 Z M 43.400663 14.400532 C 43.099729 14.90004 42.49991 15.100662 42.000402 14.799729 C 41.500894 14.500843 41.400583 13.898977 41.699469 13.399469 L 44.899187 7.999049 C 45.20012 7.499541 45.799939 7.39923 46.299448 7.700163 C 46.801003 7.999049 46.899267 8.600915 46.600381 9.100423 Z M 50.700851 22.400851 C 50.199296 22.699737 49.599477 22.499115 49.400902 21.999607 C 49.099969 21.500099 49.300591 20.900279 49.800099 20.599346 L 55.200519 17.60025 C 55.700027 17.299317 56.299846 17.499939 56.600779 17.999447 C 56.899665 18.501003 56.699043 19.100822 56.199535 19.399708 Z M 52.999817 32.999022 C 52.500309 32.999022 52.000801 32.499514 52.000801 32.000005 C 52.000801 31.400186 52.500309 31.000989 52.999817 31.000989 L 59.200678 31.099253 C 59.700186 31.099253 60.199695 31.600808 60.199695 32.100316 C 60.199695 32.700136 59.700186 33.099333 59.200678 33.099333 Z M 49.599477 43.400665 C 49.099969 43.099731 48.999658 42.499912 49.300591 42.000404 C 49.599477 41.500896 50.199296 41.400585 50.700851 41.699471 L 56.00096 44.800925 C 56.500468 45.099811 56.600779 45.69963 56.299846 46.199138 C 56.00096 46.700694 55.399094 46.801005 54.899586 46.500072 Z M 41.599158 50.700853 C 41.300272 50.199298 41.500894 49.599479 42.000402 49.300593 C 42.49991 48.999659 43.099729 49.200282 43.400663 49.69979 L 46.399759 55.10021 C 46.700692 55.599718 46.50007 56.199537 46.000562 56.400159 C 45.499006 56.699045 44.899187 56.50047 44.600301 56.000962 Z M 31.000987 52.999819 C 31.000987 52.500311 31.500495 52.000803 32.000004 52.000803 C 32.499512 52.000803 32.99902 52.500311 32.99902 52.999819 L 32.900756 59.20068 C 32.900756 59.800499 32.399201 60.199696 31.899692 60.199696 C 31.299873 60.199696 30.900676 59.700188 30.900676 59.20068 Z M 20.599344 49.599479 C 20.900278 49.099971 21.500097 48.899348 21.999605 49.200282 C 22.499113 49.499168 22.599424 50.098987 22.300538 50.600542 L 19.199084 56.000962 C 18.900198 56.50047 18.300379 56.600781 17.800871 56.299848 C 17.299315 56.000962 17.199004 55.399096 17.399626 54.899588 Z M 13.299156 41.59916 C 13.800711 41.300274 14.40053 41.500896 14.699416 42.000404 C 15.000349 42.499912 14.799727 43.099731 14.300219 43.400665 L 8.899799 46.399761 C 8.400291 46.700694 7.800472 46.500072 7.499539 46.000563 C 7.200653 45.499008 7.399228 44.899189 7.900783 44.600303 Z M 11.00019 31.000989 C 11.600009 31.000989 11.999206 31.500497 11.999206 32.000005 C 11.999206 32.599825 11.499698 32.999022 11.00019 32.999022 L 4.799329 32.900758 C 4.299821 32.900758 3.800312 32.399203 3.800312 31.899694 C 3.800312 31.299875 4.299821 30.900678 4.799329 30.900678 Z M 14.40053 20.599346 C 14.900038 20.900279 15.000349 21.500099 14.699416 21.999607 C 14.40053 22.499115 13.800711 22.599426 13.299156 22.30054 L 7.999047 19.199086 C 7.499539 18.9002 7.399228 18.300381 7.700161 17.800872 C 7.999047 17.299317 8.600913 17.199006 9.100421 17.499939 Z M 22.400849 13.299158 C 22.699735 13.800713 22.499113 14.400532 21.999605 14.699418 C 21.500097 15.000351 20.900278 14.799729 20.599344 14.300221 L 17.600248 8.899801 C 17.299315 8.400293 17.499937 7.800474 17.999445 7.499541 C 18.501001 7.200655 19.10082 7.39923 19.399706 7.900785 Z M 32.99902 11.000192 C 32.99902 11.4997 32.499512 11.999208 32.000004 11.999208 C 31.400184 11.999208 31.000987 11.4997 31.000987 11.000192 L 31.099251 4.799331 C 31.099251 4.199511 31.600806 3.800314 32.100315 3.800314 C 32.599823 3.800314 33.099331 4.299823 33.099331 4.799331 Z M 32.000004 15.49986 C 36.499671 15.49986 40.700453 17.299317 43.699549 20.30046 C 46.700692 23.299556 48.500149 27.400027 48.500149 31.899694 C 48.500149 36.499673 46.700692 40.600144 43.699549 43.59924 C 40.700453 46.600383 36.599982 48.39984 32.000004 48.39984 C 27.400025 48.39984 23.299554 46.600383 20.300458 43.59924 C 17.299315 40.600144 15.499858 36.499673 15.499858 31.899694 C 15.499858 27.400027 17.299315 23.299556 20.300458 20.30046 C 23.299554 17.399628 27.400025 15.49986 32.000004 15.49986 Z M 42.201024 21.798985 C 39.599078 19.199086 36.000163 17.60025 32.000004 17.60025 C 27.999844 17.60025 24.400929 19.199086 21.798983 21.798985 C 19.199084 24.400931 17.499937 27.999846 17.499937 32.000005 C 17.499937 36.000165 19.10082 39.59908 21.798983 42.29929 C 24.400929 44.899189 27.999844 46.500072 32.000004 46.500072 C 36.000163 46.500072 39.599078 44.899189 42.201024 42.29929 C 44.800923 39.699391 46.399759 36.000165 46.399759 32.000005 C 46.399759 27.999846 44.899187 24.400931 42.201024 21.798985 Z M 31.000987 41.59916 C 31.000987 35.199724 31.000987 28.800287 31.000987 22.400851 C 28.699974 22.599426 26.699895 23.600489 25.199323 25.199325 C 23.399865 26.900519 22.400849 29.299795 22.400849 32.000005 C 22.400849 34.700215 23.500177 37.099492 25.199323 38.800686 C 26.699895 40.29921 28.800285 41.400585 31.000987 41.59916 Z M 31.000987 41.59916 " stroke="#FFFFFF" stroke-width="0.227" stroke-opacity="1" stroke-miterlimit="10"/></g></svg>
`;
footer.before(theme);
let lightOrDark="light";
function themeSet(theme){
	if(theme==dark){
	$("body").css(
		{"background-color":"#233648","color":"#f4f6f7"
		});
	$("h2").css(
		{
		"color":"#f4f6f7"
		});
	$("a").css(
		{
		"color":"#FFF7D6"
		});
	$("a:hover").css(
		{
		"color":"#FFF7D6"
		});
	$(".code").css(
		{
		"color":"#233648",
		"background-color":"#f4f6f7"
		});
	lightOrDark="dark";
		theme.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="480" zoomAndPan="magnify" viewBox="0 0 360 269.999989" height="360" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="7a734988ef"><path d="M 126 81 L 234 81 L 234 189 L 126 189 Z M 126 81 " clip-rule="nonzero"/></clipPath></defs><path fill="#F4F6F7" d="M 181.90625 155.417969 C 181.90625 156.371094 180.953125 157.324219 180 157.324219 C 173.894531 157.324219 168.167969 154.84375 164.351562 150.835938 C 160.347656 146.832031 157.867188 141.296875 157.867188 135.191406 C 157.867188 129.085938 160.347656 123.550781 164.351562 119.542969 C 168.359375 115.535156 173.894531 113.054688 180 113.054688 C 180.953125 113.054688 181.90625 114.011719 181.90625 114.964844 C 181.90625 128.128906 181.90625 141.871094 181.90625 155.417969 Z M 201.753906 101.417969 C 201.179688 102.371094 200.035156 102.753906 199.082031 102.179688 C 198.128906 101.609375 197.9375 100.460938 198.507812 99.507812 L 204.613281 89.203125 C 205.1875 88.25 206.332031 88.058594 207.285156 88.632812 C 208.242188 89.203125 208.429688 90.351562 207.859375 91.304688 Z M 215.683594 116.683594 C 214.726562 117.253906 213.582031 116.871094 213.203125 115.917969 C 212.628906 114.964844 213.011719 113.820312 213.964844 113.246094 L 224.269531 107.523438 C 225.222656 106.949219 226.367188 107.332031 226.941406 108.285156 C 227.511719 109.242188 227.128906 110.386719 226.175781 110.957031 Z M 220.070312 136.90625 C 219.117188 136.90625 218.164062 135.953125 218.164062 135 C 218.164062 133.855469 219.117188 133.09375 220.070312 133.09375 L 231.902344 133.28125 C 232.855469 133.28125 233.808594 134.238281 233.808594 135.191406 C 233.808594 136.335938 232.855469 137.097656 231.902344 137.097656 Z M 213.582031 156.753906 C 212.628906 156.179688 212.4375 155.035156 213.011719 154.082031 C 213.582031 153.128906 214.726562 152.9375 215.683594 153.507812 L 225.796875 159.425781 C 226.75 159.996094 226.941406 161.140625 226.367188 162.09375 C 225.796875 163.050781 224.648438 163.242188 223.695312 162.667969 Z M 198.316406 170.683594 C 197.746094 169.726562 198.128906 168.582031 199.082031 168.011719 C 200.035156 167.4375 201.179688 167.820312 201.753906 168.773438 L 207.476562 179.078125 C 208.050781 180.03125 207.667969 181.175781 206.714844 181.558594 C 205.757812 182.128906 204.613281 181.75 204.042969 180.796875 Z M 178.09375 175.070312 C 178.09375 174.117188 179.046875 173.164062 180 173.164062 C 180.953125 173.164062 181.90625 174.117188 181.90625 175.070312 L 181.71875 186.902344 C 181.71875 188.046875 180.761719 188.808594 179.808594 188.808594 C 178.664062 188.808594 177.902344 187.855469 177.902344 186.902344 Z M 158.246094 168.582031 C 158.820312 167.628906 159.964844 167.246094 160.917969 167.820312 C 161.871094 168.390625 162.0625 169.535156 161.492188 170.492188 L 155.574219 180.796875 C 155.003906 181.75 153.859375 181.941406 152.90625 181.367188 C 151.949219 180.796875 151.757812 179.648438 152.140625 178.695312 Z M 144.316406 153.316406 C 145.273438 152.746094 146.417969 153.128906 146.988281 154.082031 C 147.5625 155.035156 147.179688 156.179688 146.226562 156.753906 L 135.921875 162.476562 C 134.96875 163.050781 133.824219 162.667969 133.25 161.714844 C 132.679688 160.757812 133.058594 159.613281 134.015625 159.042969 Z M 139.929688 133.09375 C 141.074219 133.09375 141.835938 134.046875 141.835938 135 C 141.835938 136.144531 140.882812 136.90625 139.929688 136.90625 L 128.097656 136.71875 C 127.144531 136.71875 126.191406 135.761719 126.191406 134.808594 C 126.191406 133.664062 127.144531 132.902344 128.097656 132.902344 Z M 146.417969 113.246094 C 147.371094 113.820312 147.5625 114.964844 146.988281 115.917969 C 146.417969 116.871094 145.273438 117.0625 144.316406 116.492188 L 134.203125 110.574219 C 133.25 110.003906 133.058594 108.859375 133.632812 107.90625 C 134.203125 106.949219 135.351562 106.757812 136.304688 107.332031 Z M 161.683594 99.316406 C 162.253906 100.273438 161.871094 101.417969 160.917969 101.988281 C 159.964844 102.5625 158.820312 102.179688 158.246094 101.226562 L 152.523438 90.921875 C 151.949219 89.96875 152.332031 88.824219 153.285156 88.25 C 154.242188 87.679688 155.386719 88.058594 155.957031 89.015625 Z M 181.90625 94.929688 C 181.90625 95.882812 180.953125 96.835938 180 96.835938 C 178.855469 96.835938 178.09375 95.882812 178.09375 94.929688 L 178.28125 83.097656 C 178.28125 81.953125 179.238281 81.191406 180.191406 81.191406 C 181.144531 81.191406 182.097656 82.144531 182.097656 83.097656 Z M 180 103.515625 C 188.585938 103.515625 196.601562 106.949219 202.324219 112.675781 C 208.050781 118.398438 211.484375 126.222656 211.484375 134.808594 C 211.484375 143.585938 208.050781 151.410156 202.324219 157.132812 C 196.601562 162.859375 188.777344 166.292969 180 166.292969 C 171.222656 166.292969 163.398438 162.859375 157.675781 157.132812 C 151.949219 151.410156 148.515625 143.585938 148.515625 134.808594 C 148.515625 126.222656 151.949219 118.398438 157.675781 112.675781 C 163.398438 107.140625 171.222656 103.515625 180 103.515625 Z M 199.464844 115.535156 C 194.5 110.574219 187.632812 107.523438 180 107.523438 C 172.367188 107.523438 165.5 110.574219 160.535156 115.535156 C 155.574219 120.5 152.332031 127.367188 152.332031 135 C 152.332031 142.632812 155.386719 149.5 160.535156 154.652344 C 165.5 159.613281 172.367188 162.667969 180 162.667969 C 187.632812 162.667969 194.5 159.613281 199.464844 154.652344 C 204.425781 149.691406 207.476562 142.632812 207.476562 135 C 207.476562 127.367188 204.613281 120.5 199.464844 115.535156 Z M 178.09375 153.316406 C 178.09375 141.105469 178.09375 128.894531 178.09375 116.683594 C 173.703125 117.0625 169.886719 118.972656 167.023438 122.023438 C 163.589844 125.269531 161.683594 129.847656 161.683594 135 C 161.683594 140.152344 163.78125 144.730469 167.023438 147.976562 C 169.886719 150.835938 173.894531 152.9375 178.09375 153.316406 Z M 178.09375 153.316406 " fill-opacity="1" fill-rule="nonzero"/><g clip-path="url(#7a734988ef)"><path stroke-linecap="butt" transform="matrix(1.908127, 0, 0, 1.908127, 118.939927, 73.939924)" fill="none" stroke-linejoin="miter" d="M 32.99902 42.700534 C 32.99902 43.200042 32.499512 43.699551 32.000004 43.699551 C 28.800285 43.699551 25.799142 42.399601 23.799063 40.29921 C 21.700719 38.200867 20.400769 35.300035 20.400769 32.100316 C 20.400769 28.900598 21.700719 25.999766 23.799063 23.899375 C 25.899453 21.798985 28.800285 20.499035 32.000004 20.499035 C 32.499512 20.499035 32.99902 21.000591 32.99902 21.500099 C 32.99902 28.399043 32.99902 35.600968 32.99902 42.700534 Z M 43.400663 14.400532 C 43.099729 14.90004 42.49991 15.100662 42.000402 14.799729 C 41.500894 14.500843 41.400583 13.898977 41.699469 13.399469 L 44.899187 7.999049 C 45.20012 7.499541 45.799939 7.39923 46.299448 7.700163 C 46.801003 7.999049 46.899267 8.600915 46.600381 9.100423 Z M 50.700851 22.400851 C 50.199296 22.699737 49.599477 22.499115 49.400902 21.999607 C 49.099969 21.500099 49.300591 20.900279 49.800099 20.599346 L 55.200519 17.60025 C 55.700027 17.299317 56.299846 17.499939 56.600779 17.999447 C 56.899665 18.501003 56.699043 19.100822 56.199535 19.399708 Z M 52.999817 32.999022 C 52.500309 32.999022 52.000801 32.499514 52.000801 32.000005 C 52.000801 31.400186 52.500309 31.000989 52.999817 31.000989 L 59.200678 31.099253 C 59.700186 31.099253 60.199695 31.600808 60.199695 32.100316 C 60.199695 32.700136 59.700186 33.099333 59.200678 33.099333 Z M 49.599477 43.400665 C 49.099969 43.099731 48.999658 42.499912 49.300591 42.000404 C 49.599477 41.500896 50.199296 41.400585 50.700851 41.699471 L 56.00096 44.800925 C 56.500468 45.099811 56.600779 45.69963 56.299846 46.199138 C 56.00096 46.700694 55.399094 46.801005 54.899586 46.500072 Z M 41.599158 50.700853 C 41.300272 50.199298 41.500894 49.599479 42.000402 49.300593 C 42.49991 48.999659 43.099729 49.200282 43.400663 49.69979 L 46.399759 55.10021 C 46.700692 55.599718 46.50007 56.199537 46.000562 56.400159 C 45.499006 56.699045 44.899187 56.50047 44.600301 56.000962 Z M 31.000987 52.999819 C 31.000987 52.500311 31.500495 52.000803 32.000004 52.000803 C 32.499512 52.000803 32.99902 52.500311 32.99902 52.999819 L 32.900756 59.20068 C 32.900756 59.800499 32.399201 60.199696 31.899692 60.199696 C 31.299873 60.199696 30.900676 59.700188 30.900676 59.20068 Z M 20.599344 49.599479 C 20.900278 49.099971 21.500097 48.899348 21.999605 49.200282 C 22.499113 49.499168 22.599424 50.098987 22.300538 50.600542 L 19.199084 56.000962 C 18.900198 56.50047 18.300379 56.600781 17.800871 56.299848 C 17.299315 56.000962 17.199004 55.399096 17.399626 54.899588 Z M 13.299156 41.59916 C 13.800711 41.300274 14.40053 41.500896 14.699416 42.000404 C 15.000349 42.499912 14.799727 43.099731 14.300219 43.400665 L 8.899799 46.399761 C 8.400291 46.700694 7.800472 46.500072 7.499539 46.000563 C 7.200653 45.499008 7.399228 44.899189 7.900783 44.600303 Z M 11.00019 31.000989 C 11.600009 31.000989 11.999206 31.500497 11.999206 32.000005 C 11.999206 32.599825 11.499698 32.999022 11.00019 32.999022 L 4.799329 32.900758 C 4.299821 32.900758 3.800312 32.399203 3.800312 31.899694 C 3.800312 31.299875 4.299821 30.900678 4.799329 30.900678 Z M 14.40053 20.599346 C 14.900038 20.900279 15.000349 21.500099 14.699416 21.999607 C 14.40053 22.499115 13.800711 22.599426 13.299156 22.30054 L 7.999047 19.199086 C 7.499539 18.9002 7.399228 18.300381 7.700161 17.800872 C 7.999047 17.299317 8.600913 17.199006 9.100421 17.499939 Z M 22.400849 13.299158 C 22.699735 13.800713 22.499113 14.400532 21.999605 14.699418 C 21.500097 15.000351 20.900278 14.799729 20.599344 14.300221 L 17.600248 8.899801 C 17.299315 8.400293 17.499937 7.800474 17.999445 7.499541 C 18.501001 7.200655 19.10082 7.39923 19.399706 7.900785 Z M 32.99902 11.000192 C 32.99902 11.4997 32.499512 11.999208 32.000004 11.999208 C 31.400184 11.999208 31.000987 11.4997 31.000987 11.000192 L 31.099251 4.799331 C 31.099251 4.199511 31.600806 3.800314 32.100315 3.800314 C 32.599823 3.800314 33.099331 4.299823 33.099331 4.799331 Z M 32.000004 15.49986 C 36.499671 15.49986 40.700453 17.299317 43.699549 20.30046 C 46.700692 23.299556 48.500149 27.400027 48.500149 31.899694 C 48.500149 36.499673 46.700692 40.600144 43.699549 43.59924 C 40.700453 46.600383 36.599982 48.39984 32.000004 48.39984 C 27.400025 48.39984 23.299554 46.600383 20.300458 43.59924 C 17.299315 40.600144 15.499858 36.499673 15.499858 31.899694 C 15.499858 27.400027 17.299315 23.299556 20.300458 20.30046 C 23.299554 17.399628 27.400025 15.49986 32.000004 15.49986 Z M 42.201024 21.798985 C 39.599078 19.199086 36.000163 17.60025 32.000004 17.60025 C 27.999844 17.60025 24.400929 19.199086 21.798983 21.798985 C 19.199084 24.400931 17.499937 27.999846 17.499937 32.000005 C 17.499937 36.000165 19.10082 39.59908 21.798983 42.29929 C 24.400929 44.899189 27.999844 46.500072 32.000004 46.500072 C 36.000163 46.500072 39.599078 44.899189 42.201024 42.29929 C 44.800923 39.699391 46.399759 36.000165 46.399759 32.000005 C 46.399759 27.999846 44.899187 24.400931 42.201024 21.798985 Z M 31.000987 41.59916 C 31.000987 35.199724 31.000987 28.800287 31.000987 22.400851 C 28.699974 22.599426 26.699895 23.600489 25.199323 25.199325 C 23.399865 26.900519 22.400849 29.299795 22.400849 32.000005 C 22.400849 34.700215 23.500177 37.099492 25.199323 38.800686 C 26.699895 40.29921 28.800285 41.400585 31.000987 41.59916 Z M 31.000987 41.59916 " stroke="#F4F6F7" stroke-width="0.227" stroke-opacity="1" stroke-miterlimit="10"/></g></svg>
`;
	}
	if(theme==light){
	$("body").css(
		{"background-color":"#f4f6f7","color":"#233648"
		});
	$("h2").css(
		{
		"color":"#233648"
		});
	$("a").css(
		{
		"color":"#4b749c"
		});
	$("a:hover").css(
		{
		"color":"#4b749c"
		});
	$(".code").css(
		{
		"color":"#f4f6f7",
		"background-color":"#233648"
		});
	lightOrDark="light";
		theme.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="480" zoomAndPan="magnify" viewBox="0 0 360 269.999989" height="360" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="7a734988ef"><path d="M 126 81 L 234 81 L 234 189 L 126 189 Z M 126 81 " clip-rule="nonzero"/></clipPath></defs><path fill="#233648" d="M 181.90625 155.417969 C 181.90625 156.371094 180.953125 157.324219 180 157.324219 C 173.894531 157.324219 168.167969 154.84375 164.351562 150.835938 C 160.347656 146.832031 157.867188 141.296875 157.867188 135.191406 C 157.867188 129.085938 160.347656 123.550781 164.351562 119.542969 C 168.359375 115.535156 173.894531 113.054688 180 113.054688 C 180.953125 113.054688 181.90625 114.011719 181.90625 114.964844 C 181.90625 128.128906 181.90625 141.871094 181.90625 155.417969 Z M 201.753906 101.417969 C 201.179688 102.371094 200.035156 102.753906 199.082031 102.179688 C 198.128906 101.609375 197.9375 100.460938 198.507812 99.507812 L 204.613281 89.203125 C 205.1875 88.25 206.332031 88.058594 207.285156 88.632812 C 208.242188 89.203125 208.429688 90.351562 207.859375 91.304688 Z M 215.683594 116.683594 C 214.726562 117.253906 213.582031 116.871094 213.203125 115.917969 C 212.628906 114.964844 213.011719 113.820312 213.964844 113.246094 L 224.269531 107.523438 C 225.222656 106.949219 226.367188 107.332031 226.941406 108.285156 C 227.511719 109.242188 227.128906 110.386719 226.175781 110.957031 Z M 220.070312 136.90625 C 219.117188 136.90625 218.164062 135.953125 218.164062 135 C 218.164062 133.855469 219.117188 133.09375 220.070312 133.09375 L 231.902344 133.28125 C 232.855469 133.28125 233.808594 134.238281 233.808594 135.191406 C 233.808594 136.335938 232.855469 137.097656 231.902344 137.097656 Z M 213.582031 156.753906 C 212.628906 156.179688 212.4375 155.035156 213.011719 154.082031 C 213.582031 153.128906 214.726562 152.9375 215.683594 153.507812 L 225.796875 159.425781 C 226.75 159.996094 226.941406 161.140625 226.367188 162.09375 C 225.796875 163.050781 224.648438 163.242188 223.695312 162.667969 Z M 198.316406 170.683594 C 197.746094 169.726562 198.128906 168.582031 199.082031 168.011719 C 200.035156 167.4375 201.179688 167.820312 201.753906 168.773438 L 207.476562 179.078125 C 208.050781 180.03125 207.667969 181.175781 206.714844 181.558594 C 205.757812 182.128906 204.613281 181.75 204.042969 180.796875 Z M 178.09375 175.070312 C 178.09375 174.117188 179.046875 173.164062 180 173.164062 C 180.953125 173.164062 181.90625 174.117188 181.90625 175.070312 L 181.71875 186.902344 C 181.71875 188.046875 180.761719 188.808594 179.808594 188.808594 C 178.664062 188.808594 177.902344 187.855469 177.902344 186.902344 Z M 158.246094 168.582031 C 158.820312 167.628906 159.964844 167.246094 160.917969 167.820312 C 161.871094 168.390625 162.0625 169.535156 161.492188 170.492188 L 155.574219 180.796875 C 155.003906 181.75 153.859375 181.941406 152.90625 181.367188 C 151.949219 180.796875 151.757812 179.648438 152.140625 178.695312 Z M 144.316406 153.316406 C 145.273438 152.746094 146.417969 153.128906 146.988281 154.082031 C 147.5625 155.035156 147.179688 156.179688 146.226562 156.753906 L 135.921875 162.476562 C 134.96875 163.050781 133.824219 162.667969 133.25 161.714844 C 132.679688 160.757812 133.058594 159.613281 134.015625 159.042969 Z M 139.929688 133.09375 C 141.074219 133.09375 141.835938 134.046875 141.835938 135 C 141.835938 136.144531 140.882812 136.90625 139.929688 136.90625 L 128.097656 136.71875 C 127.144531 136.71875 126.191406 135.761719 126.191406 134.808594 C 126.191406 133.664062 127.144531 132.902344 128.097656 132.902344 Z M 146.417969 113.246094 C 147.371094 113.820312 147.5625 114.964844 146.988281 115.917969 C 146.417969 116.871094 145.273438 117.0625 144.316406 116.492188 L 134.203125 110.574219 C 133.25 110.003906 133.058594 108.859375 133.632812 107.90625 C 134.203125 106.949219 135.351562 106.757812 136.304688 107.332031 Z M 161.683594 99.316406 C 162.253906 100.273438 161.871094 101.417969 160.917969 101.988281 C 159.964844 102.5625 158.820312 102.179688 158.246094 101.226562 L 152.523438 90.921875 C 151.949219 89.96875 152.332031 88.824219 153.285156 88.25 C 154.242188 87.679688 155.386719 88.058594 155.957031 89.015625 Z M 181.90625 94.929688 C 181.90625 95.882812 180.953125 96.835938 180 96.835938 C 178.855469 96.835938 178.09375 95.882812 178.09375 94.929688 L 178.28125 83.097656 C 178.28125 81.953125 179.238281 81.191406 180.191406 81.191406 C 181.144531 81.191406 182.097656 82.144531 182.097656 83.097656 Z M 180 103.515625 C 188.585938 103.515625 196.601562 106.949219 202.324219 112.675781 C 208.050781 118.398438 211.484375 126.222656 211.484375 134.808594 C 211.484375 143.585938 208.050781 151.410156 202.324219 157.132812 C 196.601562 162.859375 188.777344 166.292969 180 166.292969 C 171.222656 166.292969 163.398438 162.859375 157.675781 157.132812 C 151.949219 151.410156 148.515625 143.585938 148.515625 134.808594 C 148.515625 126.222656 151.949219 118.398438 157.675781 112.675781 C 163.398438 107.140625 171.222656 103.515625 180 103.515625 Z M 199.464844 115.535156 C 194.5 110.574219 187.632812 107.523438 180 107.523438 C 172.367188 107.523438 165.5 110.574219 160.535156 115.535156 C 155.574219 120.5 152.332031 127.367188 152.332031 135 C 152.332031 142.632812 155.386719 149.5 160.535156 154.652344 C 165.5 159.613281 172.367188 162.667969 180 162.667969 C 187.632812 162.667969 194.5 159.613281 199.464844 154.652344 C 204.425781 149.691406 207.476562 142.632812 207.476562 135 C 207.476562 127.367188 204.613281 120.5 199.464844 115.535156 Z M 178.09375 153.316406 C 178.09375 141.105469 178.09375 128.894531 178.09375 116.683594 C 173.703125 117.0625 169.886719 118.972656 167.023438 122.023438 C 163.589844 125.269531 161.683594 129.847656 161.683594 135 C 161.683594 140.152344 163.78125 144.730469 167.023438 147.976562 C 169.886719 150.835938 173.894531 152.9375 178.09375 153.316406 Z M 178.09375 153.316406 " fill-opacity="1" fill-rule="nonzero"/><g clip-path="url(#7a734988ef)"><path stroke-linecap="butt" transform="matrix(1.908127, 0, 0, 1.908127, 118.939927, 73.939924)" fill="none" stroke-linejoin="miter" d="M 32.99902 42.700534 C 32.99902 43.200042 32.499512 43.699551 32.000004 43.699551 C 28.800285 43.699551 25.799142 42.399601 23.799063 40.29921 C 21.700719 38.200867 20.400769 35.300035 20.400769 32.100316 C 20.400769 28.900598 21.700719 25.999766 23.799063 23.899375 C 25.899453 21.798985 28.800285 20.499035 32.000004 20.499035 C 32.499512 20.499035 32.99902 21.000591 32.99902 21.500099 C 32.99902 28.399043 32.99902 35.600968 32.99902 42.700534 Z M 43.400663 14.400532 C 43.099729 14.90004 42.49991 15.100662 42.000402 14.799729 C 41.500894 14.500843 41.400583 13.898977 41.699469 13.399469 L 44.899187 7.999049 C 45.20012 7.499541 45.799939 7.39923 46.299448 7.700163 C 46.801003 7.999049 46.899267 8.600915 46.600381 9.100423 Z M 50.700851 22.400851 C 50.199296 22.699737 49.599477 22.499115 49.400902 21.999607 C 49.099969 21.500099 49.300591 20.900279 49.800099 20.599346 L 55.200519 17.60025 C 55.700027 17.299317 56.299846 17.499939 56.600779 17.999447 C 56.899665 18.501003 56.699043 19.100822 56.199535 19.399708 Z M 52.999817 32.999022 C 52.500309 32.999022 52.000801 32.499514 52.000801 32.000005 C 52.000801 31.400186 52.500309 31.000989 52.999817 31.000989 L 59.200678 31.099253 C 59.700186 31.099253 60.199695 31.600808 60.199695 32.100316 C 60.199695 32.700136 59.700186 33.099333 59.200678 33.099333 Z M 49.599477 43.400665 C 49.099969 43.099731 48.999658 42.499912 49.300591 42.000404 C 49.599477 41.500896 50.199296 41.400585 50.700851 41.699471 L 56.00096 44.800925 C 56.500468 45.099811 56.600779 45.69963 56.299846 46.199138 C 56.00096 46.700694 55.399094 46.801005 54.899586 46.500072 Z M 41.599158 50.700853 C 41.300272 50.199298 41.500894 49.599479 42.000402 49.300593 C 42.49991 48.999659 43.099729 49.200282 43.400663 49.69979 L 46.399759 55.10021 C 46.700692 55.599718 46.50007 56.199537 46.000562 56.400159 C 45.499006 56.699045 44.899187 56.50047 44.600301 56.000962 Z M 31.000987 52.999819 C 31.000987 52.500311 31.500495 52.000803 32.000004 52.000803 C 32.499512 52.000803 32.99902 52.500311 32.99902 52.999819 L 32.900756 59.20068 C 32.900756 59.800499 32.399201 60.199696 31.899692 60.199696 C 31.299873 60.199696 30.900676 59.700188 30.900676 59.20068 Z M 20.599344 49.599479 C 20.900278 49.099971 21.500097 48.899348 21.999605 49.200282 C 22.499113 49.499168 22.599424 50.098987 22.300538 50.600542 L 19.199084 56.000962 C 18.900198 56.50047 18.300379 56.600781 17.800871 56.299848 C 17.299315 56.000962 17.199004 55.399096 17.399626 54.899588 Z M 13.299156 41.59916 C 13.800711 41.300274 14.40053 41.500896 14.699416 42.000404 C 15.000349 42.499912 14.799727 43.099731 14.300219 43.400665 L 8.899799 46.399761 C 8.400291 46.700694 7.800472 46.500072 7.499539 46.000563 C 7.200653 45.499008 7.399228 44.899189 7.900783 44.600303 Z M 11.00019 31.000989 C 11.600009 31.000989 11.999206 31.500497 11.999206 32.000005 C 11.999206 32.599825 11.499698 32.999022 11.00019 32.999022 L 4.799329 32.900758 C 4.299821 32.900758 3.800312 32.399203 3.800312 31.899694 C 3.800312 31.299875 4.299821 30.900678 4.799329 30.900678 Z M 14.40053 20.599346 C 14.900038 20.900279 15.000349 21.500099 14.699416 21.999607 C 14.40053 22.499115 13.800711 22.599426 13.299156 22.30054 L 7.999047 19.199086 C 7.499539 18.9002 7.399228 18.300381 7.700161 17.800872 C 7.999047 17.299317 8.600913 17.199006 9.100421 17.499939 Z M 22.400849 13.299158 C 22.699735 13.800713 22.499113 14.400532 21.999605 14.699418 C 21.500097 15.000351 20.900278 14.799729 20.599344 14.300221 L 17.600248 8.899801 C 17.299315 8.400293 17.499937 7.800474 17.999445 7.499541 C 18.501001 7.200655 19.10082 7.39923 19.399706 7.900785 Z M 32.99902 11.000192 C 32.99902 11.4997 32.499512 11.999208 32.000004 11.999208 C 31.400184 11.999208 31.000987 11.4997 31.000987 11.000192 L 31.099251 4.799331 C 31.099251 4.199511 31.600806 3.800314 32.100315 3.800314 C 32.599823 3.800314 33.099331 4.299823 33.099331 4.799331 Z M 32.000004 15.49986 C 36.499671 15.49986 40.700453 17.299317 43.699549 20.30046 C 46.700692 23.299556 48.500149 27.400027 48.500149 31.899694 C 48.500149 36.499673 46.700692 40.600144 43.699549 43.59924 C 40.700453 46.600383 36.599982 48.39984 32.000004 48.39984 C 27.400025 48.39984 23.299554 46.600383 20.300458 43.59924 C 17.299315 40.600144 15.499858 36.499673 15.499858 31.899694 C 15.499858 27.400027 17.299315 23.299556 20.300458 20.30046 C 23.299554 17.399628 27.400025 15.49986 32.000004 15.49986 Z M 42.201024 21.798985 C 39.599078 19.199086 36.000163 17.60025 32.000004 17.60025 C 27.999844 17.60025 24.400929 19.199086 21.798983 21.798985 C 19.199084 24.400931 17.499937 27.999846 17.499937 32.000005 C 17.499937 36.000165 19.10082 39.59908 21.798983 42.29929 C 24.400929 44.899189 27.999844 46.500072 32.000004 46.500072 C 36.000163 46.500072 39.599078 44.899189 42.201024 42.29929 C 44.800923 39.699391 46.399759 36.000165 46.399759 32.000005 C 46.399759 27.999846 44.899187 24.400931 42.201024 21.798985 Z M 31.000987 41.59916 C 31.000987 35.199724 31.000987 28.800287 31.000987 22.400851 C 28.699974 22.599426 26.699895 23.600489 25.199323 25.199325 C 23.399865 26.900519 22.400849 29.299795 22.400849 32.000005 C 22.400849 34.700215 23.500177 37.099492 25.199323 38.800686 C 26.699895 40.29921 28.800285 41.400585 31.000987 41.59916 Z M 31.000987 41.59916 " stroke="#233648" stroke-width="0.227" stroke-opacity="1" stroke-miterlimit="10"/></g></svg>
`;
	}
}
themeSet(lightOrDark);
theme.onclick=function(){
	if(lightOrDark==light){
	themeSet(dark);
	}else{
	themeSet(light);
	}
}
