$(document).ready(function() 
{    $("#results").click(function() {                

if (!$("input[@name=q1]:checked").val() ||            
!$("input[@name=q2]:checked").val() ||            
!$("input[@name=q3]:checked").val() ||            
!$("input[@name=q4]:checked").val() ||            
!$("input[@name=q5]:checked").val() ||            
!$("input[@name=q6]:checked").val() ||            
!$("input[@name=q7]:checked").val() ||            
!$("input[@name=q8]:checked").val() ||            
!$("input[@name=q9]:checked").val() || 
!$("input[@name=q10]:checked").val() ||   
!$("input[@name=q11]:checked").val() ||   
!$("input[@name=q12]:checked").val() ||   
!$("input[@name=q13]:checked").val() ||   
!$("input[@name=q14]:checked").val() ||   
!$("input[@name=q15]:checked").val() ||   
!$("input[@name=q16]:checked").val() ||   
!$("input[@name=q17]:checked").val() ||   
!$("input[@name=q18]:checked").val() ||   
!$("input[@name=q19]:checked").val() ||   
!$("input[@name=q20]:checked").val() ||   
!$("input[@name=q21]:checked").val() ||   
!$("input[@name=q22]:checked").val() ||   
!$("input[@name=q23]:checked").val() ||   
!$("input[@name=q24]:checked").val() ||   
!$("input[@name=q25]:checked").val() ||   
!$("input[@name=q26]:checked").val() ||   
!$("input[@name=q27]:checked").val() ||   
!$("input[@name=q28]:checked").val() ||   
!$("input[@name=q29]:checked").val() ||   
!$("input[@name=q30]:checked").val() ||   
!$("input[@name=q31]:checked").val() ||   
!$("input[@name=q32]:checked").val() ||   
!$("input[@name=q33]:checked").val() ||   
!$("input[@name=q34]:checked").val() ||   
!$("input[@name=q35]:checked").val() ||   
!$("input[@name=q36]:checked").val() ||   
!$("input[@name=q37]:checked").val() ||   
!$("input[@name=q38]:checked").val() ||   
!$("input[@name=q39]:checked").val() ||   
!$("input[@name=q40]:checked").val() ||   
!$("input[@name=q41]:checked").val() ||   
!$("input[@name=q42]:checked").val() ||   
!$("input[@name=q43]:checked").val() ||   
!$("input[@name=q44]:checked").val() ||   
!$("input[@name=q45]:checked").val() ||   
!$("input[@name=q46]:checked").val() ||   
!$("input[@name=q47]:checked").val() ||   
!$("input[@name=q48]:checked").val() ||   
!$("input[@name=q49]:checked").val() ||   
!$("input[@name=q50]:checked").val() ||              
!$("input[@name=q51]:checked").val()            
) {            
alert("Nisi še končal!");        
}        

else {            
var cat1name = "1";            
var cat2name = "2";            
var cat3name = "3";            
var cat4name = "4";            
var cat5name = "5";            
var cat6name = "6";            
var cat7name = "7";            
var cat8name = "8";            
var cat9name = "9";            
var cat10name = "10";   
var cat11name = "11";
var cat12name = "12";
var cat13name = "13";
var cat14name = "14";
var cat15name = "15";
var cat16name = "16";
var cat17name = "17";
var cat18name = "18";
var cat19name = "19";
var cat20name = "20";
var cat21name = "21";
var cat22name = "22";
var cat23name = "23";
var cat24name = "24";
var cat25name = "25";
var cat26name = "26";
var cat27name = "27";
var cat28name = "28";
var cat29name = "29";
var cat30name = "30";
var cat31name = "31";
var cat32name = "32";
var cat33name = "33";
var cat34name = "34";
var cat35name = "35";
var cat36name = "36";
var cat37name = "37";
var cat38name = "38";
var cat39name = "39";
var cat40name = "40";
var cat41name = "41";
var cat42name = "42";
var cat43name = "43";
var cat44name = "44";
var cat45name = "45";
var cat46name = "46";
var cat47name = "47";
var cat48name = "48";
var cat49name = "49";
var cat50name = "50";
var cat51name = "51";         
var cat52name = "None";            
            

var cat1 = ($("input[@name=q1]:checked").val() != "a"); 
           
var cat2 = ($("input[@name=q2]:checked").val() != "b");  

var cat3 = ($("input[@name=q3]:checked").val() != "a");  

var cat4 = ($("input[@name=q4]:checked").val() != "c");  

var cat5 = ($("input[@name=q5]:checked").val() != "a"); 

var cat6 = ($("input[@name=q6]:checked").val() != "b");  

var cat7 = ($("input[@name=q7]:checked").val() != "a"); 

var cat8 = ($("input[@name=q8]:checked").val() != "c");  

var cat9 = ($("input[@name=q9]:checked").val() != "a"); 

var cat10 = ($("input[@name=q10]:checked").val() != "a");  

var cat11 = ($("input[@name=q11]:checked").val() != "a");  

var cat12 = ($("input[@name=q12]:checked").val() != "c");  

var cat13 = ($("input[@name=q13]:checked").val() != "a");  

var cat14 = ($("input[@name=q14]:checked").val() != "b");  

var cat15 = ($("input[@name=q15]:checked").val() != "b");  

var cat16 = ($("input[@name=q16]:checked").val() != "c");  

var cat17 = ($("input[@name=q17]:checked").val() != "c");  

var cat18 = ($("input[@name=q18]:checked").val() != "b");  

var cat19 = ($("input[@name=q19]:checked").val() != "c");  

var cat20 = ($("input[@name=q20]:checked").val() != "a");  

var cat21 = ($("input[@name=q21]:checked").val() != "a");  

var cat22 = ($("input[@name=q22]:checked").val() != "a");  

var cat23 = ($("input[@name=q23]:checked").val() != "b");  

var cat24 = ($("input[@name=q24]:checked").val() != "c");  

var cat25 = ($("input[@name=q25]:checked").val() != "c");  

var cat26 = ($("input[@name=q26]:checked").val() != "a");  

var cat27 = ($("input[@name=q27]:checked").val() != "a");  

var cat28 = ($("input[@name=q28]:checked").val() != "a");  

var cat29 = ($("input[@name=q29]:checked").val() != "b");  

var cat30 = ($("input[@name=q30]:checked").val() != "c");  

var cat31 = ($("input[@name=q31]:checked").val() != "c");  

var cat32 = ($("input[@name=q32]:checked").val() != "a");  

var cat33 = ($("input[@name=q33]:checked").val() != "a");  

var cat34 = ($("input[@name=q34]:checked").val() != "b");  

var cat35 = ($("input[@name=q35]:checked").val() != "b");  

var cat36 = ($("input[@name=q36]:checked").val() != "a");  

var cat37 = ($("input[@name=q37]:checked").val() != "a");  

var cat38 = ($("input[@name=q38]:checked").val() != "c");  

var cat39 = ($("input[@name=q39]:checked").val() != "a");  

var cat40 = ($("input[@name=q40]:checked").val() != "c");  

var cat41 = ($("input[@name=q41]:checked").val() != "a");  

var cat42 = ($("input[@name=q42]:checked").val() != "b");  

var cat43 = ($("input[@name=q43]:checked").val() != "a");  

var cat44 = ($("input[@name=q44]:checked").val() != "b");  

var cat45 = ($("input[@name=q45]:checked").val() != "c");  

var cat46 = ($("input[@name=q46]:checked").val() != "a");  

var cat47 = ($("input[@name=q47]:checked").val() != "c");  

var cat48 = ($("input[@name=q48]:checked").val() != "b");  

var cat49 = ($("input[@name=q49]:checked").val() != "a");  

var cat50 = ($("input[@name=q50]:checked").val() != "b");  

var cat51 = ($("input[@name=q51]:checked").val() != "c"); 

var cat52 = (!cat1 && !cat2 && !cat3 && !cat4 && !cat5 && !cat6 && !cat7 && !cat8 && !cat9 && !cat10 && !cat11 && !cat12 && !cat13 && !cat14 && !cat15 && !cat16 && !cat17 && !cat18 && !cat19 && !cat20 && !cat21 && !cat22 && !cat23 && !cat24 && !cat25 && !cat26 && !cat27 && !cat28 && !cat29 && !cat30 && !cat31 && !cat32 && !cat33 && !cat34 && !cat35 && !cat36 && !cat37 && !cat38 && !cat39 && !cat40 && !cat41 && !cat42 && !cat43 && !cat44 && !cat45 && !cat46 && !cat47 && !cat48 && !cat49 && !cat50 && !cat51); var categories = [];                        

if (cat1) { categories.push(cat1name) };            
if (cat2) { categories.push(cat2name) };            
if (cat3) { categories.push(cat3name) };            
if (cat4) { categories.push(cat4name) };            
if (cat5) { categories.push(cat5name) };            
if (cat6) { categories.push(cat6name) };            
if (cat7) { categories.push(cat7name) };            
if (cat8) { categories.push(cat8name) };            
if (cat9) { categories.push(cat9name) };            
if (cat10) { categories.push(cat10name) };            
if (cat11) { categories.push(cat11name) };       
if (cat12) { categories.push(cat12name) }; 
if (cat13) { categories.push(cat13name) }; 
if (cat14) { categories.push(cat14name) }; 
if (cat15) { categories.push(cat15name) }; 
if (cat16) { categories.push(cat16name) }; 
if (cat17) { categories.push(cat17name) };                  
if (cat18) { categories.push(cat18name) }; 
if (cat19) { categories.push(cat19name) }; 
if (cat20) { categories.push(cat20name) }; 
if (cat21) { categories.push(cat21name) }; 
if (cat22) { categories.push(cat22name) }; 
if (cat23) { categories.push(cat23name) }; 
if (cat24) { categories.push(cat24name) }; 
if (cat25) { categories.push(cat25name) }; 
if (cat26) { categories.push(cat26name) }; 
if (cat27) { categories.push(cat27name) }; 
if (cat28) { categories.push(cat28name) }; 
if (cat29) { categories.push(cat29name) }; 
if (cat30) { categories.push(cat30name) }; 
if (cat31) { categories.push(cat31name) }; 
if (cat32) { categories.push(cat32name) }; 
if (cat33) { categories.push(cat33name) }; 
if (cat34) { categories.push(cat34name) }; 
if (cat35) { categories.push(cat35name) }; 
if (cat36) { categories.push(cat36name) }; 
if (cat37) { categories.push(cat37name) }; 
if (cat38) { categories.push(cat38name) }; 
if (cat39) { categories.push(cat39name) }; 
if (cat40) { categories.push(cat40name) }; 
if (cat41) { categories.push(cat41name) }; 
if (cat42) { categories.push(cat42name) }; 
if (cat43) { categories.push(cat43name) }; 
if (cat44) { categories.push(cat44name) }; 
if (cat45) { categories.push(cat45name) }; 
if (cat46) { categories.push(cat46name) }; 
if (cat47) { categories.push(cat47name) }; 
if (cat48) { categories.push(cat48name) }; 
if (cat49) { categories.push(cat49name) }; 
if (cat50) { categories.push(cat50name) }; 
if (cat51) { categories.push(cat51name) }; 
if (cat52) { categories.push(cat52name) }; 

var catStr = 'You answered the following questions incorrectly: ' + categories.join(', ') + '';                     
$("#categorylist").text(catStr);                        
$("#categorylist").show("slow");            

if (cat1) { $("#category1").show("slow"); };            
if (cat2) { $("#category2").show("slow"); };            
if (cat3) { $("#category3").show("slow"); };            
if (cat4) { $("#category4").show("slow"); };            
if (cat5) { $("#category5").show("slow"); };            
if (cat6) { $("#category6").show("slow"); };            
if (cat7) { $("#category7").show("slow"); };            
if (cat8) { $("#category8").show("slow"); };            
if (cat9) { $("#category9").show("slow"); };            
if (cat10) { $("#category10").show("slow"); };            
if (cat11) { $("#category11").show("slow"); };
if (cat12) { $("#category12").show("slow"); };
if (cat13) { $("#category13").show("slow"); };
if (cat14) { $("#category14").show("slow"); };
if (cat15) { $("#category15").show("slow"); };
if (cat16) { $("#category16").show("slow"); };
if (cat17) { $("#category17").show("slow"); };
if (cat18) { $("#category18").show("slow"); };
if (cat19) { $("#category19").show("slow"); };
if (cat20) { $("#category20").show("slow"); };
if (cat21) { $("#category21").show("slow"); };
if (cat22) { $("#category22").show("slow"); };
if (cat23) { $("#category23").show("slow"); };
if (cat24) { $("#category24").show("slow"); };
if (cat25) { $("#category25").show("slow"); };
if (cat26) { $("#category26").show("slow"); };
if (cat27) { $("#category27").show("slow"); };
if (cat28) { $("#category28").show("slow"); };
if (cat29) { $("#category29").show("slow"); };
if (cat30) { $("#category30").show("slow"); };
if (cat31) { $("#category31").show("slow"); };
if (cat32) { $("#category32").show("slow"); };
if (cat33) { $("#category33").show("slow"); };
if (cat34) { $("#category34").show("slow"); };
if (cat35) { $("#category35").show("slow"); };
if (cat36) { $("#category36").show("slow"); };
if (cat37) { $("#category37").show("slow"); };
if (cat38) { $("#category38").show("slow"); };
if (cat39) { $("#category39").show("slow"); };
if (cat40) { $("#category40").show("slow"); };
if (cat41) { $("#category41").show("slow"); };
if (cat42) { $("#category42").show("slow"); };
if (cat43) { $("#category43").show("slow"); };
if (cat44) { $("#category44").show("slow"); };
if (cat45) { $("#category45").show("slow"); };
if (cat46) { $("#category46").show("slow"); };
if (cat47) { $("#category47").show("slow"); };
if (cat48) { $("#category48").show("slow"); };
if (cat49) { $("#category49").show("slow"); };
if (cat50) { $("#category50").show("slow"); };
if (cat51) { $("#category51").show("slow"); };
if (cat52) { $("#category52").show("slow"); };
{ $("#closing").show("slow"); };
}
    });});