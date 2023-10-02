/*   <script src="jquery-1.11.0.min.js"></script>*/
 
 function psize() 
 
   {   
     var D_H= $(document).height();
     //  alert('Height'+D_H);
      
     var D_W= $(document).width();
     //  alert('Width'+D_W);
     
    
     if((D_H>705)&&(D_W>1366))
         {
           var Doc_Height=D_H-2;  
             // alert('h'+D_H);
           var Doc_Width=D_W-2;  
            //alert('Doc_Width'+Doc_Width);
           var D_logo_Width=$("#D_Logo").width();
           var D_Menu_Info_Width=$("#D_Menu_Info").width();
           var D_Menu_App_Width=$("#D_Menu_App").width();
         /*  alert('logo_Width'+D_logo_Width);
                var a=Doc_Width/2;
                alert(a);
                var b=D_logo_Width/2;
               alert(b);*/
           var Doc_Logo_Left=((Doc_Width/2)-(D_logo_Width/2));
         //    alert('Doc_Logo_Left'+Doc_Logo_Left);
           var Doc_Menu_Info_Left=((Doc_Width/2)-(D_Menu_Info_Width/2));
           //  alert('Doc_Menu_Info_Left'+Doc_Menu_Info_Left);
           var Doc_Menu_App_Left=((Doc_Width/2)-(D_Menu_App_Width/2));
            // alert('Doc_Menu_App_Left'+Doc_Menu_App_Left);
      
         
           $("#Sit_Body").css('width',Doc_Width+'px');
           $("#Sit_Body").css('height',Doc_Height+'px');
           $("#D_Footer").css('width',Doc_Width+'px');
           $("#D_Logo").css('left',(Doc_Logo_Left-1)+'px');
           $("#D_Menu_Info").css('left',(Doc_Menu_Info_Left-1)+'px');
	   //$("#D_Menu_Info").css('top',(Doc_Height - 250)+'px');
           $("#D_Menu_App").css('left',(Doc_Menu_App_Left-1)+'px');
	   $("#D_Menu_App").css('top',(Doc_Height - 200)+'px');
         }
       //alert('D_Logo_left'+($("#D_Logo").offset().left));
       //alert('Menu_Info_left'+($("#D_Menu_Info").offset().left));
       //alert('Menu_App_left'+($("#D_Menu_App").offset().left));
       if(D_W<1366)
           {
               D_W_scroll=(1366-D_W);
               //alert(D_W_scroll);
               $( "#sit_Pattern" ).scrollLeft( D_W_scroll/2 );
               //alert(D_W_scroll/2);
           }
   }
   jQuery(document).ready
                  (
                    function()
		     {
                       psize();
		     }
                  );
		$(window).resize
                  (
                    function() 
		      {
			psize();
		      }
                  );
 
	
