
/*------------ Feed function and its prototype------------*/
function Feed(id,type){
	this.id=id;;
	this.type=type;	
}
Feed.prototype.getID = function(){
	return this.id;
};
Feed.prototype.getType = function(){
	return this.type;
};

function TextFeed(id,text){
	this.id = id;
	this.text = text;
	this.time= new Date();
}

TextFeed.prototype = Object.create(Feed.prototype);
TextFeed.prototype.getFeed = function(){
	return this.text;
}
function URLFeed(id,url){
	this.url=url;
	this.time= new Date();
}
URLFeed.prototype = Object.create(Feed.prototype);
URLFeed.prototype.getFeed = function(){
	return this.url;
}
/*---------create a feed----------------*/
var feedNew = [];
function createFeed(id){	
	var feedValue = document.getElementById(id).value;
	document.getElementById(id).value = "";	
	var feed;
	if(feedValue.length > 4 && (feedValue.substring(0,4).toUpperCase() == "HTTP" || feedValue.substring(0,3).toUpperCase() == "WWW")){
		if(feedValue.substring(0,3).toUpperCase() == "WWW") {
			feedValue ="http://"+feedValue;
		}
		feed = new URLFeed(1,feedValue);
	} else {
		feed = new TextFeed(1,feedValue);
	}
	if (feedValue.length>0){
		AddFeedService(feed);
	} else {
		alert('Please enter the Feed');
	}
}
/*--------------------Delete a Feed -----------------*/
function deleteFeeds(id){	
	deleteFeedService(id);
}
/*Returning Functions and Immediate Invocation*/
var AddFeedService = service("AddFeed");  
var deleteFeedService = service("DeleteFeed");

function User(userName){
	this.feeds = [];
}

function service(mode){
	var currentUser = new User("Gayathri");
	var feedsArray = currentUser.feeds;
	var result;
	
	if(mode === "AddFeed"){	
		result = function(feed){
			feedsArray.push(feed);			
			reloadFeeds(feedsArray);
		};
	} else if (mode === "DeleteFeed"){
		result = function(id){
			feedsArray=feedNew;
			console.log(feedsArray); 
			feedsArray.splice(id,1);	
			console.log(feedsArray);
			var myfeed = document.getElementById("loadFeeds");
			while (myfeed.firstChild) {
				myfeed.removeChild(myfeed.firstChild);
			}			
			reloadFeeds(feedsArray);
		};
	} 
	return result;
}
/**********************************************************/

function reloadFeeds(feedsArray){		
	var element = document.getElementById("loadFeeds");	
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}	
	var feeds = feedsArray;	
	feedNew=feeds;
	var div = document.createElement("div");	
	var userFeed,userFeedText,userFeedDelete,userFeedDate,img,node,input,node1,index,userIcon;
		for(var i=0,l=feeds.length;i<l;i++){				
			userFeed = getElement("div","userFeed");
			userFeedText = getElement("div","UserFeedText");
			userFeedDelete = getElement("div","UserFeedDelete");
			userFeedDate = getElement("div","UserFeedDate");
			userIcon = getElement("div","userIcon");
			img = document.createElement("img");		
			img.setAttribute("src", "../img/dp.jpg");
			img.setAttribute("height", "40px");
			img.setAttribute("width", "40px");
			userIcon.appendChild(img);
			userIcon.setAttribute("id", "img1");
			node = document.createElement("a");
			if(feeds[i] instanceof URLFeed){
				node.setAttribute("href", feeds[i].getFeed());		
			}
			node.setAttribute("id", "txt");
			node.innerHTML=feeds[i].getFeed();
			userFeedText.appendChild(node);
			input = document.createElement("input");		
			input.setAttribute("type", "button");
			input.setAttribute("onclick", ("deleteFeeds("+i+")"));
			input.setAttribute("id", "but");
			userFeedDelete.appendChild(input);
			node1 = document.createTextNode(getDateString(feeds[i].time));
			userFeedDate.appendChild(node1);
			userFeed.setAttribute("id", "feedDiv");
			userFeed.appendChild(userIcon);
			userFeed.appendChild(userFeedText);
			userFeed.appendChild(userFeedDelete);
			userFeed.appendChild(userFeedDate);
			div.appendChild(userFeed);
			
			// var result = "<div class="userFeed" id="feedDiv">" +
						// "<div class="userIcon" id="img1"> <img src="../img/dp.jpg" height="40px" width="40px"></div>" +
						// "<div class="UserFeedText"><a id="txt">sdfsf</a></div>" +
						// "<div class="UserFeedDelete"><input type="button" onclick="deleteFeeds(i)" id="but"></div>"+
						// "<div class="UserFeedDate">10/28/2014 2:35 PM</div></div>"
			// element.appendChild(result);
		}
	element.appendChild(div);
}

function getElement(type,styleClass){
	var element = document.createElement(type);
	element.setAttribute("class",styleClass);
	return element;
}

function getDateString(date){
	return (date.getMonth()+1) +"/"+ (date.getDate()) + "/"+(date.getFullYear()) + " " + (date.getHours() > 12 ? date.getHours() - 12 : date.getHours() )+":"+(date.getMinutes()) + " " + (date.getHours() > 12 ? "PM" : "AM" );
}
