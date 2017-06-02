var flag =1 ;
	function openMenu(e)
{ 
		if(flag==0)
	{document.getElementById('nav-bar').style.display = 'block';
     flag=1;}

else
	{document.getElementById('nav-bar').style.display ='none';
      flag=0;}
}