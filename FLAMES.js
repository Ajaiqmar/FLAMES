var name1,name2,c=0,msg;
var dict={F:"FRIENDS",L:'LOVE',A:'AFFECTION',M:'MARRIAGE',E:'ENEMY',S:'SISTER'}

function refresh(msg)
{
	var i;
	for(i=0;i<msg.length;i++)
	{
		document.getElementById(msg[i]).style.textDecoration="none";
	}
}

function re()
{
	var v='FLAMES';
	document.getElementById('output').innerHTML="";
	document.getElementById("username1").value="";
	document.getElementById("username2").value="";
	refresh(v);
}

function calculate()
{
	var v='FLAMES';
	refresh(v);
	name1=document.getElementById("username1").value;
	name2=document.getElementById("username2").value;
	c=name1.length+name2.length;
	var i=0,j=0;
	if(c==0 || name1.length==0 || name2.length==0)
	{
		document.getElementById('output').innerHTML="INVALID";
	}
	else
	{
		while(v.length!=1)
		{
			i=i+1;
			if(i%c==0)
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