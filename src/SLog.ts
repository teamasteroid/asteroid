import 'colors'

function send(text: string): void {
  const date: Date = new Date();
	const o = [
		date.getFullYear(),
		date.getMonth() + 1,
		date.getDate(),
		date.getHours(),
		date.getMinutes(),
		date.getSeconds()
  ]
	let t: string[] = []
	for(let i in o){
		if(o[i] < 10) t[i] = "0"+o[i];
		else t[i] = o[i].toString();
	}
	console.log("["+t[0]+"-"+t[1]+"-"+t[2]+" "+t[3]+":"+t[4]+":"+t[5]+"] "+text);
}

export const info = (text: string): void => {
  send('[info] ' + text)
}

export const warn = (text: string): void => {
  send('[warn] '.black.bgYellow + text)
}

export const success = (text: string): void => {
  send('[success] '.green + text)
}

export const err = (text: string): void => {
  send('[warn] '.bgRed + text)
}

export default send