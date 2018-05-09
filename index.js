var name = new Vue({
	el:"#name",
	data:{
		name_value:'',
	}
})

var qq = new Vue({
	el:'#qq',
	data:{
		qq_value:''
	}
})

var phone = new Vue({
	el:'#phone',
	data:{
		phone_value:''
	}
})
var app = new Vue({
	el:'#department',
	data:{
		active:true,
		display_active:true,
		none:true,
		d_value:'请选择你的院系',
		department:{
			信工:'信息工程学院',
			物理:'物理与光电工程学院',
			艺术:'艺术学院',
			公管:'公共管理学院',
			商:'商学院',
			材料:'材料科学与工程学院',
			环资:'环境与资源学院',
			外院:'外国语学院',
			化工:"化工学院",
			化学:'化学学院',
			数学:'数学与计算科学学院',
			法:'法学院·知识产权学院',
			兴湘:'兴湘学院',
			历史:'历史系',
			哲学:'哲学系',
			土力:"土木工程与力学学院",
			文新:"文学与新闻学院",
			机械:'机械工程学院',
			研究生:'研究生院'
		}
	},
	methods:{
		handleSelect:function(e){
			this.d_value = e.target.innerText;
		},
		listshow:function(e){
			console.log(e);
			if(this.display_active == true)
				this.display_active = false;
			else
				this.display_active = true;
		}
	}
})

var graduate = new Vue({
	el:'#graduate',
	data:{
		active:true,
		graduate_value:'undergradute'
	},
	methods:{
		handlePicked:function(e){
			if(e.target.className == 'not_select')
			{
				this.active = !this.active;
				if(this.graduate_value == 'undergradute')
				{
					this.graduate_value = 'master'
				}
				else
				{
					this.graduate_value = 'undergradute'
				}
			}
			else
				return;
		}
	}
})



var object_kind = new Vue({
	el:'#object-kind',
	data:{
		photo:true,
		middle:true,
		big:true,
		object:''
	},
	methods:{
		classSelect:function(e){
		
			if(e.target.className == "none")
				return;
			else if(e.target.innerText == "照片" || e.target.dataset.class == '照片')
			{
				this.photo = false;
				this.middle = true;
				this.big = true;
				this.object = 'photo';
			}
			else if(e.target.innerText == "中小物件" ||  e.target.dataset.class == '中小物件')
			{
				this.photo = true;
				this.middle = false;
				this.big = true;
				this.object = 'middle';
			}
			else
			{
				this.photo = true;
				this.middle = true;
				this.big = false;
				this.object = "big";
			}
		},
		
	}
})

var photo = new Vue({
	el:'#photo',
	methods:{
		show:function(){
			letter.none = false;
		},
		no_story:function(){
			no_story.none = !no_story.none;
		}
	}
})
var letter = new Vue({
	el:'#letter',
	data:{
		show:false,
		story:'',
		count:300,
		attention:false,
		none:true,
	
	},
	methods:{
		c:function(){
			var tmp_c = new String(this.story);
			this.count = 300-tmp_c.length;
		},
		fade:function(){
			var tmp_c = new String(this.story);
			this.count = 300-tmp_c.length;
			this.none = true;
		}
	}
})
var no_story = new Vue({
	el:'#no-story',
	data:{
		none:true
	},
	methods:{
		hide:function(){

			this.none = true;
		}		
	}
	

})
function update() {
    //获取浏览器的userAgent,并转化为小写
    var ua = navigator.userAgent.toLowerCase();
    //判断是否是苹果手机，是则是true
    var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
    if (isIos) {
        $("input:file").removeAttr("capture");
    };
}

function check(form){
	var myreg=/^[1][3,4,5,7,8][0-9]{9}$/; 
	if(form.name.value == "")
	{
		alert("请输入姓名!");
		return false;
	}
	if(form.qq.value == "")
	{
		alert("请输入qq账号!");
		return false;
	}
	if(form.phone.value==""||!myreg.test(form.phone.value))
	{
		alert("请输入正确的手机号！");
		return false;
	}
	if(form.department.value=="请选择你的院系")
	{
		alert("请选择你的院系！");
		return false;
	}
	if(form.object.value == "")
	{
		alert("请选择你的展品大小！")
		return false;
	}
	if(form.photo.value=="")
	{
		alert("点击猫头鹰上传你的展品图片");
		return false;
	}
	if(form.story.value=="")
	{
		alert("我们一定不能当没有故事的同学！");
		return false;
	}
	if(letter.count<0)
	{
		alert("请将故事的字数控制在300以内");
		return false;
	}
	return true;

}