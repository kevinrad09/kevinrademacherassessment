<script   src="https://code.jquery.com/jquery-1.12.4.js"   integrity="sha256-Qw82+bXyGq6MydymqBxNPYTaUXXq7c8v3CwiYwLLNXU="   crossorigin="anonymous"></script>
        <script>
            /*$("#slide").hover(function(){
                $("#slide").slideUp("slow");
            });
            
            $("#slide").hover(function(){
                $("#slide").slideDown("slow");
            });
            */
            
            $("#slide").click(function(){

                $("#popup").fadeIn(1000);

            });
            
            $("#close").click(function(){

                $("#popup").fadeOut(1000);

            });
  
        </script>