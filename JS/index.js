
function refresh(msg)
{
	var i;
	for(i=0;i<msg.length;i++)
	{
		document.getElementById(msg[i]).style.textDecoration="none";
	}
}

function refreshBoard()
{
	var v='FLAMES';
	document.getElementById('output').innerHTML="";
	document.getElementById("username1").value="";
	document.getElementById("username2").value="";
	refresh(v);
}

function calculate()
{
	var v = 'FLAMES',c = 0;
	var name1,name2;
	var dict={F:"FRIENDS",L:'LOVE',A:'AFFECTION',M:'MARRIAGE',E:'ENEMY',S:'SIBLING'};

	name1=document.getElementById("username1").value.toUpperCase();
	name2=document.getElementById("username2").value.toUpperCase();

	refreshBoard();

	if(name1.length == 0 || name2.length == 0)
	{
		document.getElementById('output').innerHTML="INVALID";
	}
	else
	{
		hashTable = [];

		for(var i=0;i<26;i++)
		{
			hashTable.push(0);
		}

		for(var i=0;i<name1.length;i++)
		{
			if(name1[i] >= 'A' && name1[i] <= 'Z')
			{
				hashTable[name1.charCodeAt(i)-65] += 1;
			}
		}

		for(var i=0;i<name2.length;i++)
		{
			if(name2[i] >= 'A' && name2[i] <= 'Z')
			{
				hashTable[name2.charCodeAt(i)-65] -= 1;
			}
		}

		for(var i=0;i<26;i++)
		{
			c += Math.abs(hashTable[i]);
		}

		var i = 0,j = 0;
		while(v.length!=1)
		{
			i=i+1;
			if(c==0 || i%c==0)
			{
				document.getElementById(v[j]).style.textDecoration="rgb(255,0,0) line-through";
				v=v.replace(v[j],'');
				j=j-1;
			}
			j=j+1
			if(j==v.length)
			{
				j=0;
			}
		}

		document.getElementById('output').innerHTML=dict[v[0]];
		document.getElementById('output').style.color="rgb(255,0,0)";
	}
}
