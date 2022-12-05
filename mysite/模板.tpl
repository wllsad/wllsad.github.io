    <link rel="stylesheet" href="./模板.css">
    <div class="nav">
        <ul class="navlist">
            <li class="one"><a href="../home/home.html">首页</a></li>
            <li class="one">
                <a href="./listpage/listpage.html">所有糕点</a>
                
            </li>
            <li class="one">
                <a href="./登录页面.html">登录注册</a>
                
            </li>
        </ul>
    </div>
    <div class="container">
        <div class="img">
            <img src=":imgsrc" alt="">
        </div>
        <div class="leftbox">
            <h2 id="title">:title</h2>
            <div class="ziduan">
                <div class="star">美食星级：<span>:star</span></div>
                <div class="hotel">推荐酒店：<span>:hotel</span></div>
            </div>
            <ul class="list">
                <h3>其余相关酒店</h3>
                <li><a href="">陶陶居</a></li>
                <li><a href="">利苑酒家</a></li>
                <li><a href="">炳胜公馆</a></li>
            </ul>
            <ul class="list">
                <h3>美食制作方法</h3>
                <li><a href="https://www.douguo.com/">豆果美食</a></li>
                <li><a href="https://www.meishichina.com/">美食天下</a></li>

            </ul>
            <button class="change">修改</button>
        </div>
        <div class="rightbox">
            <main>
                <h2>美食介绍</h2>
                <p>:introduce</p>
            </main>
        </div>
        
        <div class="form">
            <h2>修改博文</h2>
            星级：<br>
            <input type="text" id="star"><br>
            推荐酒店：<br>
            <input type="text" id="hotel"><br>
            图片：<br>
            <input type="text"  id="img"><br>
            正文：<br>
            <textarea id="main" cols="30" rows="10"></textarea>
            <button id="change">修改</button>
        </div>
            
        
    
    </div>
