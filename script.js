var names=new Array();
names[0]="Yaakov";
names[1]="Rytham";
names[2]="Jonny";
names[3]="jack";
names[4]="Annie";
names[5]="Nikki";
names[6]="John";
names[7]="paul";
names[8]="laura";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}