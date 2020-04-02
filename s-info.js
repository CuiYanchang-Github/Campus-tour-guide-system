var allInfo = [];
var info0 = new Object();//黑龙江大学主楼
var info1 = new Object();//黑龙江大学体育馆
var info2 = new Object();//黑龙江大学联通广场
var info3 = new Object();//黑龙江大学体育场
var info4 = new Object();
var info5 = new Object();
var info6 = new Object();
var info7 = new Object();
var info8 = new Object();
var info9 = new Object();
var info10 = new Object();

info0.name = '黑龙江大学主楼';
info0.num = 0;
info0.Info = '哈尔滨三类保护建筑,黑龙江大学主楼的设计，以俄罗斯社会主义民族风格为基础，在装饰上融入了很多中国风格。';
info0.img = 's-图片/主楼.png';

info1.name = '黑龙江大学体育馆';
info1.num = 1;
info1.Info = '体育馆内设有一个主馆、三个副馆和贵宾室、会议室、接待室、记者室、新闻发布中心、兴奋剂检测中心、等辅助设施。馆内配套设施齐全，设备先进，是一座现代化的、目前省内最大的综合性体育馆';
info1.img = 's-图片/体育馆.png';

info2.name = '黑龙江大学联通广场';
info2.num = 2;
info2.Info = '类似操场，有塑胶跑道，中间是绿色草皮，树下有石桌石凳供学生学习。';
info2.img = 's-图片/联通广场.png';

info3.name = '黑龙江大学体育场';
info3.num = 3;
info3.Info = '为学生体育赛事提供场地。';
info3.img = 's-图片/体育场.png';

info4.name = '黑龙江大学A区食堂';
info4.num = 4;
info4.Info = '黑龙江大学最大的食堂';
info4.img = 's-图片/A区食堂.png';

info5.name = '黑龙江大学汇文楼';
info5.num = 5;
info5.Info = '黑龙江大学的汇文楼，主楼的双胞胎，教室很多，可以容纳几千人一起上课';
info5.img = 's-图片/汇文楼.png';

info6.name = '黑龙江大学综合楼';
info6.num = 6;
info6.Info = '综合各种功能';
info6.img = 's-图片/综合楼.png';

info7.name = '黑龙江大学C区3号楼';
info7.num = 7;
info7.Info = 'c区教学楼，是同学上课、自习的主要教学楼';
info7.img = 's-图片/三号楼.png';

info8.name = '黑龙江大学C区4号楼';
info8.num = 8;
info8.Info = '计算机科学技术学院、软件学院教学楼。配备外语教学语音室。地下创业园';
info8.img = 's-图片/四号楼.png';

info9.name = '黑龙江大学艺术楼';
info9.num = 9;
info9.Info = '除了有一个艺术楼，周边都是宿舍楼，学生有空就去那里走走，温馨又热闹';
info9.img = 's-图片/艺术楼.png';

info10.name = '黑龙江大学游泳馆';
info10.num = 10;
info10.Info = '包括游泳馆和健身馆，致力为学生提供良好的健身、有用环境';
info10.img = 's-图片/游泳馆.png';


allInfo.push(info0);
allInfo.push(info1);
allInfo.push(info2);
allInfo.push(info3);
allInfo.push(info4);
allInfo.push(info5);
allInfo.push(info6);
allInfo.push(info7);
allInfo.push(info8);
allInfo.push(info9);
allInfo.push(info10);

var INTMAX = 32767;

var Weight = new Array();
for (var i = 0; i < 11; i++) {
    Weight[i] = new Array();
    for (var j = 0; j < 11; j++) {
        Weight[i][j] = INTMAX;
    }
}
Weight[0][1] = 10;
Weight[1][0] = 10;

Weight[0][2] = 15;
Weight[2][0] = 15;

Weight[0][4] = 102;
Weight[4][0] = 102;

Weight[1][2] = 20;
Weight[2][1] = 20;

Weight[2][3] = 70;
Weight[3][2] = 70;

Weight[1][3] = 45;
Weight[3][1] = 45;

Weight[2][4] = 100;
Weight[4][2] = 100;

Weight[3][5] = 30;
Weight[5][3] = 30;

Weight[3][4] = 100;
Weight[4][3] = 100;

Weight[3][6] = 80;
Weight[6][3] = 80;

Weight[6][4] = 30;
Weight[4][6] = 30;

Weight[6][5] = 60;
Weight[5][6] = 60;

Weight[6][7] = 15;
Weight[7][6] = 15;

Weight[7][8] = 10;
Weight[8][7] = 10;

Weight[6][8] = 10;
Weight[8][6] = 10;

Weight[8][9] = 40;
Weight[9][8] = 40;

Weight[7][10] = 25;
Weight[10][7] = 25;

Weight[9][10] = 5;
Weight[10][9] = 5;

