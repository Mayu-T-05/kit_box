///ステータス用データ作成
//HP
  function calculateHp() {  
    var con = document.getElementById('con_score').value;
    var siz = document.getElementById('siz_score').value;

    if (!isNaN(conScore) && !isNaN(sizScore)) { //conとsizが入力された時だけ計算する
        var hp = Math.ceil((con + siz) / 2); // HPはCONとSIZの平均値
        document.getElementById('hp_score').value = hp;
    } else {
        document.getElementById('hp_score').value = ''; // 片方が空白の場合はHPを空にする
    }
  }
//MP・SAN・幸運
  function calculateSanMpLuck() {  
    var mp = document.getElementById('pow_score').value;
    var san = mp * 5
    document.getElementById('mp_score').value = mp;
    document.getElementById('san_score').value = san;
    document.getElementById('luck').value = san;
  }


  //知識
  function calculateKnouladge() {
      var eduScore = document.getElementById('edu_score').value;
      var knowledge = eduScore * 5; 
      document.getElementById('knowledge').value = knowledge;
  }

  //アイデア
  function calculateIdea() {
      var intScore = document.getElementById('int_score').value;
      var idea = intScore * 5; 
      document.getElementById('idea').value = idea;
  }

//ダメージ
  function calculateDb() {
      var db1 = document.getElementById('db1').value;
      var db2 = document.getElementById('db1').value;
      var db3 = document.getElementById('db1').value;
      var db = db1 + "d" + db2 + "+" + db3; 
      return db
  }

//Json用ステータス作成
  function makeParameter() {
    var param = {params:[{ label: "STR", value: document.getElementById('str_score').value },{label:"CON",value:document.getElementById('con_score').value},{label:"POW",value:document.getElementById('pow_score').value},{label:"DEX",value:document.getElementById('dex_score').value},{label:"APP",value:document.getElementById('app_score').value},{label:"SIZ",value:document.getElementById('siz_score').value},{label:"INT",value:document.getElementById('int_score').value},{label:"EDU",value:document.getElementById('edu_score').value}]}
    return param;
  }

///技能作成
  function makeAbility(){
    //差分用


    
    //技能用
    
    //ダメージ用
    
    //ステータス用

  }
