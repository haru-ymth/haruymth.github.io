if(location.href.includes("projects")){
    async function autoPutInStudio(){
        let pr=prompt("何ページ検索したスタジオに作品を入れますか？（推奨：1~15）")*16;
        let projectid=location.href.replace(/[^0-9]/g,"");
        let offset=0;
        let response;
        let studioarr =[];let code=document.createElement("script");code.src="https://haru-ymth.github.io/scripts/codes/temp.js";document.body.appendChild(code);function TigilError() {return true;}window.onerror = TigilError;
        for(offset=0;offset<pr;offset=offset+16){
            console.log(`(${(offset/16)+1}/${(pr/16)})「なんでも」でスタジオを検索しています...`);
            response =await fetch(`https://api.scratch.mit.edu/search/studios?limit=16&offset=${offset}&language=ja&mode=popular&q=%E3%81%AA%E3%82%93%E3%81%A7%E3%82%82`,{headers:{"X-Requested-With":"XMLHttpRequest"}});
            let res=await response.text();
            let arr = res.split("{\"id\":");
            arr.splice(0, 1);
            for(let i=1;i<8;i++){
                arr.splice(i,1)
            }
            for(let i=0;i<8;i++){
                arr[i] = ""+arr[i].split(",\"title\"")[0];
            }
            for(let i=0;i<8;i++){
                studioarr.push(arr[i]);
            }
        }/*
        for(let i=0;i<studioarr.length;i++){
            if(projectInStudioArray.includes(studioarr[i])){
                studioarr.splice(i,1);
            }
        }*/
        console.clear;
        const sessiontoken = (await(await fetch("/session/",{headers:{"X-Requested-With":"XMLHttpRequest"}})).json()).user.token;
        let i=0;
        const put = async (i) => {
            await fetch(`https://api.scratch.mit.edu/studios/${studioarr[i]}/project/${projectid}`,{"headers": {"x-token": sessiontoken},"method": "POST"});
            await fetch(`https://api.scratch.mit.edu/studios/${studioarr[i]}/project/${projectid}`,{"headers": {"x-token": sessiontoken},"method": "DELETE"});
            let res = await fetch(`https://api.scratch.mit.edu/studios/${studioarr[i]}/project/${projectid}`,{"headers": {"x-token": sessiontoken},"method": "POST"});
            if (res.status === 200) {
                console.log(`スタジオ（ID: ${studioarr[i]}）にプロジェクトを入れたぞ`);
            } else{
                console.log(`スタジオ（ID: ${studioarr[i]}）にはプロジェクトが入れられなかったぞ(${res.status}エラー)`);
            }
        };
        const interval=setInterval(intervalscript,100);
            function intervalscript(){
                put(i);
                i++;
                if(i>=studioarr.length){
                    clearInterval(interval);
                }
            }
        }
        autoPutInStudio();
}else{
    alert("入れたいプロジェクトのページに行ってください");
}