function intro() {
	var a = canvas.width / 35, 
		startX = canvas.width / 5,
		startY = 90,
		deltaX = (startX - 30) / 40, 
		deltaA = canvas.width / 35 / 48,
		time = 0;
		
	printIntro(a, startX, startY);
	/*	
	setTimeout(() => {
		anim = setInterval(() => {
			printIntro(a, startX, startY);
			
			startX -= deltaX;
			startY -= 1.5;
			a -= deltaA;

			if (time > 40) clearInterval(anim);
			time += 1;
		}, 10);
	}, 1000);
	
	setTimeout(() => {
		ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
		anim = setInterval(() => {
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			if (time > 80) clearInterval(anim);
			time += 1;
		}, 50);
	}, 1500);
	
	setTimeout(() => {
		ctx.fillStyle = 'rgb(255, 255, 255)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		init_webGL();
	}, 4000);
    */
}

function printIntro(a, startX, startY) {
	ctx.fillStyle = '#111111';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = '#EEEEEE';
	ctx.beginPath();
	ctx.moveTo(startX, startY);
	ctx.lineTo(startX + a, startY);
	ctx.lineTo(startX + a, startY + 2 * a);
	ctx.lineTo(startX, startY + 3 * a);

	ctx.moveTo(startX + 3 * a, startY);
	ctx.lineTo(startX + 4 * a, startY);
	ctx.lineTo(startX + 4 * a, startY + 3 * a);
	ctx.lineTo(startX + 3 * a, startY + 2 * a);

	ctx.moveTo(startX, startY + 4 * a);
	ctx.lineTo(startX + a, startY + 3 * a);
	ctx.lineTo(startX + 3 * a, startY + 3 * a);
	ctx.lineTo(startX + 4 * a, startY + 4 * a);
	ctx.lineTo(startX + 3 * a, startY + 5 * a);
	ctx.lineTo(startX + a, startY + 5 * a);

	ctx.moveTo(startX, startY + 5 * a);
	ctx.lineTo(startX + a, startY + 6 * a);
	ctx.lineTo(startX + a, startY + 7 * a);
	ctx.lineTo(startX, startY + 8 * a);

	ctx.moveTo(startX, startY + 9 * a);
	ctx.lineTo(startX + a, startY + 8 * a);
	ctx.lineTo(startX + a, startY + 9 * a);

	ctx.moveTo(startX + 3 * a, startY + 6 * a);
	ctx.lineTo(startX + 4 * a, startY + 5 * a);
	ctx.lineTo(startX + 4 * a, startY + 8 * a);
	ctx.lineTo(startX + 3 * a, startY + 7 * a);

	ctx.moveTo(startX + 3 * a, startY + 8 * a);
	ctx.lineTo(startX + 4 * a, startY + 9 * a);
	ctx.lineTo(startX + 3 * a, startY + 9 * a);

	ctx.moveTo(startX + 5 * a, startY);
	ctx.lineTo(startX + 11 * a, startY);
	ctx.lineTo(startX + 10 * a, startY + a);
	ctx.lineTo(startX + 10 * a, startY + 1.5 * a);
	ctx.lineTo(startX + 9 * a, startY + 1.5 * a);
	ctx.lineTo(startX + 9 * a, startY + 0.5 * a);
	ctx.lineTo(startX + 6 * a, startY + 0.5 * a);
	ctx.lineTo(startX + 5 * a, startY + 1.5 * a);

	ctx.moveTo(startX + 5 * a, startY + 3 * a);
	ctx.lineTo(startX + 6 * a, startY + 2 * a);
	ctx.lineTo(startX + 8 * a, startY + 2 * a);
	ctx.lineTo(startX + 7 * a, startY + 3 * a);

	ctx.moveTo(startX + 5 * a, startY + 4 * a);
	ctx.lineTo(startX + 7 * a, startY + 4 * a);
	ctx.lineTo(startX + 8 * a, startY + 3 * a);
	ctx.lineTo(startX + 8 * a, startY + 4 * a);
	ctx.lineTo(startX + 7 * a, startY + 5 * a);
	ctx.lineTo(startX + 6 * a, startY + 5 * a);

	ctx.moveTo(startX + 5 * a, startY + 5 * a);
	ctx.lineTo(startX + 6 * a, startY + 6 * a);
	ctx.lineTo(startX + 6 * a, startY + 6.5 * a);
	ctx.lineTo(startX + 5 * a, startY + 7.5 * a);

	ctx.moveTo(startX + 6.5 * a, startY + 7 * a);
	ctx.lineTo(startX + 8 * a, startY + 7 * a);
	ctx.lineTo(startX + 7 * a, startY + 8 * a);
	ctx.lineTo(startX + 5.5 * a, startY + 8 * a);

	ctx.moveTo(startX + 12 * a, startY);
	ctx.lineTo(startX + 12 * a, startY + 3 * a);
	ctx.lineTo(startX + 11 * a, startY + 4 * a);
	ctx.lineTo(startX + 11 * a, startY + a);

	ctx.moveTo(startX + 9 * a, startY + 2 * a);
	ctx.lineTo(startX + 10 * a, startY + 2 * a);
	ctx.lineTo(startX + 10 * a, startY + 4 * a);
	ctx.lineTo(startX + 9 * a, startY + 3 * a);

	ctx.moveTo(startX + 10 * a, startY + 5 * a);
	ctx.lineTo(startX + 10 * a, startY + 8 * a);
	ctx.lineTo(startX + 9 * a, startY + 8 * a);
	ctx.lineTo(startX + 9 * a, startY + 6 * a);

	ctx.moveTo(startX + 11 * a, startY + 5 * a);
	ctx.lineTo(startX + 12 * a, startY + 6 * a);
	ctx.lineTo(startX + 12 * a, startY + 7 * a);
	ctx.lineTo(startX + 11 * a, startY + 7 * a);

	ctx.moveTo(startX + 13.5 * a, startY + 4.5 * a);
	ctx.lineTo(startX + 14 * a, startY + 4 * a);
	ctx.lineTo(startX + 15 * a, startY + 4 * a);
	ctx.lineTo(startX + 15.5 * a, startY + 4.5 * a);
	ctx.lineTo(startX + 15 * a, startY + 5 * a);
	ctx.lineTo(startX + 14 * a, startY + 5 * a);

	ctx.moveTo(startX + 16 * a, startY + 8 * a);
	ctx.lineTo(startX + 18 * a, startY + 2 * a);
	ctx.lineTo(startX + 19 * a, startY + 2 * a);
	ctx.lineTo(startX + 21 * a, startY + 8 * a);
	ctx.lineTo(startX + 20 * a, startY + 8 * a);
	ctx.lineTo(startX + 19.5 * a, startY + 6.5 * a);
	ctx.lineTo(startX + 20 * a, startY + 6 * a);
	ctx.lineTo(startX + 19 * a, startY + 3 * a);
	ctx.lineTo(startX + 18 * a, startY + 3 * a);
	ctx.lineTo(startX + 17 * a, startY + 6 * a);
	ctx.lineTo(startX + 17.5 * a, startY + 6.5 * a);
	ctx.lineTo(startX + 17 * a, startY + 8 * a);

	ctx.moveTo(startX + 18.3 * a, startY + 3.5 * a);
	ctx.lineTo(startX + 17.5 * a, startY + 6 * a);
	ctx.lineTo(startX + 18 * a, startY + 6.5 * a);
	ctx.lineTo(startX + 19 * a, startY + 6.5 * a);
	ctx.lineTo(startX + 19.5 * a, startY + 6 * a);
	ctx.lineTo(startX + 18.7 * a, startY + 3.5 * a);

	ctx.moveTo(startX + 13 * a, startY);
	ctx.lineTo(startX + 18.33 * a, startY);
	ctx.lineTo(startX + 18.5 * a, startY + 0.5 * a);
	ctx.lineTo(startX + 13 * a, startY + 0.5 * a);
	
	ctx.moveTo(startX + 4.5 * a, startY + 8.5 * a);
	ctx.lineTo(startX + 11 * a, startY + 8.5 * a);
	ctx.lineTo(startX + 11 * a, startY + 7.5 * a);
	ctx.lineTo(startX + 12 * a, startY + 7.5 * a);
	ctx.lineTo(startX + 12 * a, startY + 8.5 * a);
	ctx.lineTo(startX + 21.15 * a, startY + 8.5 * a);
	ctx.lineTo(startX + 21.3 * a, startY + 9 * a);
	ctx.lineTo(startX + 5 * a, startY + 9 * a);

	ctx.closePath();
	ctx.fill();
}
