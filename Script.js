function IsPalindrome()
{
	//Variable to store the Input and transform it to UpperCase
    var Input = document.querySelector(".InputBox").value.toUpperCase();

	//The code to organise the Input
    var NewInput = Input.split('').reverse().join('');

	// This 'if' statement used to check whether length of Input satisfy, the specified conditions.
   if(Input.length==0)
   {
		alert("Oops! ! ! the InputBox seems to be Empty. . . . ."); 
   }
   
   //This 'else if' statement used to check whether length of Input satisfy, the specified conditions.
   else if(Input.length<=2)
	{
     	alert("Insufficient Values! ! !  Please type more values. . . .");
	}
   
	//This 'else if' statement used to check whether the Input is palindrome or not.
	else if(Input.length>=3 && Input===NewInput)
	{
     	alert("'"+Input+"'"+" is a Palindrome! ! !");
	}
	
	//This 'else' statement used to display the Input is not a palindrome.
	else
	{
     	 alert("'"+Input+"'"+" is Not a Palindrome! ! !");
	}
}
