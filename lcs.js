a=process.argv.slice(2),r="";for(i in a[0])for(j=+i+1;j<=a[0].length;j++)p=a[0].slice(i,j),a.every(s=>s.includes(p))&&p.length>r.length&&(r=p);console.log(r)
