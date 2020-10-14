var name1,name2,msg,x="";
var dict={F:"FRIENDS",L:'LOVE',A:'AFFECTION',M:'MARRIAGE',E:'ENEMY',S:'SISTER / SEX'}

function refresh(msg)
{
	var i;
	for(i=0;i<msg.length;i++)
	{
		document.getElementById(msg[i]).style.textDecoration="none";
	}
	x="";
}

function re()
{
	var v='FLAMES';
	document.getElementById('output').innerHTML="";
	document.getElementById("username1").value="";
	document.getElementById("username2").value="";
	refresh(v);
}

function add(values)
{
	x=x+values;
}

function calculate()
{
	var v='FLAMES',c=0;
	refresh(v);
	name1=document.getElementById("username1").value;
	name2=document.getElementById("username2").value;
	var n=name1+name2;
	var ne = new Set(n);
	ne.forEach(add);
	var t=0,a,b,s=0;
	for(a=0;a<x.length;a++)
	{
		t=0;
		s=0;
		for(b=0;b<name1.length;b++)
		{
			if(x[a]==name1[b])
			t=t+1;
		}
		for(b=0;b<name2.length;b++)
		{
			if(x[a]==name2[b])
			s=s+1;
		}
		if(s==0 || t==0)
		c=c+s+t;
		else
		{
			if(s-t>0)
			c=c+(s-t);
			else if(t-s>0)
			c=c+(t-s);
		}
		
	}
	var i=0,j=0;
	if(c==0 && (name1.length==0 || name2.length==0))
	{
		document.getElementById('output').innerHTML="INVALID";
	}
	else
	{
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