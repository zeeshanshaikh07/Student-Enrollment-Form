function fncValidate() 
{
			var fn=document.form1.name.value; 
			var patt = /[^a-z]/i; 
			var name = patt.test(fn);
			
	if(fn == "") 
	{
		alert('Please input name'); 
	
		return false;
	}
			if ( fn == null || name == true ) 
			{
				alert("Enter only Alphabet for name"); 
				return false;
			}
}



$(document.body).on("submit","form[name=form1]", function(e){
    e.preventDefault();
	var a = [];
	$(".skill:checked").each(function(){
		a.push($(this).val());
	});
	var allData = '<tr class="i-table-tr fadeIn"><td class="i-table-td">'+$("#name").val()+'<br>'+$(".gen:checked").val()+'<br>'+$("#email").val()+'<br> <a href='+$("#link").val()+' target="_blank">'+$("#link").val()+'</a><br>'+a.join()+'</td><td class="i-table-td"><img src="'+$("#imglink").val()+'" style="width:120px;height:100px;" /></td></tr>';
	$(".i-table").append(allData)
});