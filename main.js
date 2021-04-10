document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault()
});

function analyzer()
{
    var s = document.getElementById("input").value;
    document.getElementById("input").value="";
    document.getElementById("string").textContent = s;
    var vowels = 0, consonants = 0, digits = 0, spaces = 0, splchar = 0;
    for(var i=0; i<s.length; i++)
    {
        if(s.charCodeAt(i)===65 || s.charCodeAt(i)===97 || s.charCodeAt(i)===69 || s.charCodeAt(i)===101 || s.charCodeAt(i)===73 || s.charCodeAt(i)===105 || s.charCodeAt(i)===79 || s.charCodeAt(i)===111 || s.charCodeAt(i)===85 || s.charCodeAt(i)===117)
        {
            vowels++;
        }
        else if( s.charCodeAt(i)===32)
        {
            spaces++;
        }   
        else if( (s.charCodeAt(i)>32 && s.charCodeAt(i)<=47) || ( s.charCodeAt(i)>=91 && s.charCodeAt(i)<=96) || (s.charCodeAt(i)>=58 && s.charCodeAt(i)<=64) || ( s.charCodeAt(i)>=123 && s.charCodeAt(i)<=126))
        {
            splchar++;
        }
        else if(s.charCodeAt(i)>=48 && s.charCodeAt(i)<=57)
        {
            digits++;
        }
        else
        {
            consonants++;
        }
    }

    document.getElementById("Vowels").textContent = vowels;
    document.getElementById("Vowels").style.color = "white";
    document.getElementById("Consonants").textContent = consonants;
    document.getElementById("Consonants").style.color = "rgb(6, 198, 231)";
    document.getElementById("Digits").textContent = digits;
    document.getElementById("Digits").style.color = "white";
    document.getElementById("Spaces").textContent = spaces;
    document.getElementById("Spaces").style.color = "rgb(6, 198, 231)";
    document.getElementById("Splchar").textContent = splchar;
    document.getElementById("Splchar").style.color = "white";
}

