function btn_1_press(){alert("Ви натиснули кнопку №1")}function btn_2_press(){let t="";confirm("Ви любите морозиво?")||(t="не "),alert(`Користувач який натиснув кнопку №2 ${t}любить морозиво`)}function btn_3_press(){let t=prompt("Як вас звати?");t&&(t=t.trim()),t||(t="незнайомцю"),alert(`Привіт, ${t}!`)}function clear_spec_field_1(){document.getElementById("spec_field_1").value=""}function clear_spec_field_2(){document.getElementById("spec_field_2").value=""}function only_big_letter(t){t.value=t.value.toUpperCase()}function only_small_letter(t){t.value=t.value.toLowerCase()}function btn_register_press(){let t=document.getElementById("login"),e=document.getElementById("password_a"),n=document.getElementById("password_b"),i=t.value,l=e.value,a=n.value;i?(i=i.trim(),i?l?l.length<6?alert("Ви ввели закороткий пароль!\nМінімальна довжина паролю - 6 символів"):a?l===a?alert("Реєстрація завершилася успішно"):alert("Паролі не збігаються!"):alert("Ви не повторили пароль!"):alert("Ви не ввели пароль!"):alert("Ви ввели некоректний логін!")):alert("Ви не ввели логін!")}let added_elements=1;function add_li(){let t=document.getElementById("editable_list"),e=document.createElement("li"),n=document.createTextNode(`Новий елемент списку №${added_elements}`);added_elements++,e.appendChild(n),t.appendChild(e)}function remove_li(){let t=document.getElementById("editable_list");t.lastChild;t.removeChild(t.lastChild)}function add_flex_button_listener(){let t=document.getElementById("flex_direction"),e=document.getElementById("justify-content"),n=document.getElementById("align-items"),i=document.getElementById("align-items1");t.onclick=change_flex_direction,e.onclick=change_justify_content,n.onclick=change_align_items,i.onclick=change_putin_items}function change_putin_items(){start_animation_babah()}let flex_direction_id=0,flex_direction=["row","row-reverse","column","column-reverse"];function change_flex_direction(t){let e=document.getElementById("flex_block");flex_direction_id+=flex_direction_id<3?1:-3;let n=flex_direction[flex_direction_id];e.style.flexDirection=n,t.target.innerHTML=`flex_direction: ${n}`}let justify_content_id=3,justify_content=["center","flex-start","flex-end","space-around","space-between"];function change_justify_content(t){let e=document.getElementById("flex_block");justify_content_id+=justify_content_id<4?1:-4;let n=justify_content[justify_content_id];e.style.justifyContent=n,t.target.innerHTML=`justify_content: ${n}`}let align_items_id=0,align_items=["center","baseline","flex-start","flex-end","stretch"];function change_align_items(t){let e=document.getElementById("flex_block");align_items_id+=align_items_id<4?1:-4;let n=align_items[align_items_id];e.style.alignItems=n,t.target.innerHTML=`align_items: ${n}`}let title_color_id=1,title_colors=["#F00","#0F0","#00F","#FF0","#F0F","#0FF"];function change_title_background(){const t=title_colors.length-1;let e=document.getElementById("title");e.style.borderColor=title_colors[title_color_id];let n=title_colors[title_color_id]+"5";e.style.backgroundColor=n,title_color_id+=title_color_id<t?1:-t}function check_condition_1(){select_elements($("input.test_b"))}function check_condition_2(){select_elements($("#cb3, #cb7"))}function check_condition_3(){select_elements($("#div_4 input[type='checkbox']").not(".test_z"))}function check_condition_4(){unselect_all_elements();let t=$("[custom_atr]");for(let e=0;e<t.length;e++){let n=t.get(e);Number($(n).attr("custom_atr"))>=25&&$(n).prop("checked",!0)}}function select_elements(t){unselect_all_elements();for(let e=0;e<t.length;e++){let n=t.get(e);$(n).prop("checked",!0)}}function unselect_all_elements(){let t=$("#div_4 input[type='checkbox']");for(let e=0;e<t.length;e++){let n=t.get(e);$(n).prop("checked",!1)}}function add_animation_button_listener(){$("#btn_timer").bind("click",start_timer),$("#btn_interval").bind("click",start_interval)}function start_timer(){$("#btn_timer").attr("value","Анімація запуститься через 3 сек."),setTimeout((()=>{$("#btn_timer").attr("value","Запустити таймер"),start_animation()}),3e3)}let intervar_run=!1;function start_interval(){if(intervar_run)return intervar_run=!1,void $("#btn_interval").attr("value","Запустити інтервал");intervar_run=!0,$("#btn_interval").attr("value","Зупинити інтервал");let t=setInterval((()=>{start_animation(),intervar_run||clearInterval(t)}),3e3)}let animation_id=0;function start_animation(){switch(console.log(`Start animation №${animation_id}`),animation_id){case 0:$("#img").animate({opacity:0,left:"-39%",top:"25%"},500).animate({opacity:1,top:"-25%"},500);break;case 1:$("#img").animate({opacity:0,left:"0%",top:"0%",width:"40%"},500);break;case 2:$("#img").animate({opacity:1,width:"128px"},500);break;case 3:$("#img").animate({opacity:0,left:"40%",width:"16px"},500);break;case 4:$("#img").animate({opacity:.5,left:"-35%",width:"128px"},500).animate({opacity:1,left:"0%",width:"128px"},500)}animation_id+=animation_id<4?1:-4}function start_animation_babah(){switch(console.log(`Start animation №${animation_id}`),animation_id){case 0:$("#img228").animate({opacity:0,left:"-39%",top:"25%"},500).animate({opacity:1,top:"-25%",width:"528px",height:"600px"},500);break;case 1:$("#img228").animate({opacity:0,left:"0%",top:"0%",width:"0%",height:"0%"},500)}animation_id+=animation_id<1?1:-1}add_flex_button_listener(),add_animation_button_listener(),setInterval(change_title_background,3e3);