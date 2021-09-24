require('dotenv').config();
const fs = require('fs');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const { r, device, badAccounts, timeNow, r15, r23 } = require('./src/helpers');
const { realtorAccounts, logS } = require('./src/realtor');
const randomAccount = Math.floor(Math.random() * realtorAccounts.length);
puppeteer.use(StealthPlugin());

(async () => {
	try {
		//----initialize
		const browser = await puppeteer.launch({ headless: false, args: ['--incognito'] }); //////// slowMo: 100,
		const page = await browser.newPage();
		await page.emulate(device);

		//----login
		await page.goto('https://www.instagram.com/accounts/login/?source=auth_switcher', { waitUntil: 'networkidle2' });
		await page.waitForSelector("[name='username']");
		await page.tap("[name='username']");
		await page.type("[name='username']", process.env.SBJ, { delay: r(15, 50) });
		await page.type("[name='password']", process.env.SBJPW, { delay: r(15, 50) });
		await Promise.all([page.waitForNavigation({ waitUntil: 'networkidle2' }), page.tap("[type='submit']")]);
		await page.waitForTimeout(r15);

		//----click notifications
		const notifyBtn = await page.$x('//*[contains(text(), "Not Now")]');
		if (notifyBtn) {
			await notifyBtn[0].tap();
			await page.waitForTimeout(r15);
		}

		//---- got to home and screenshot the follower count
		await page.goto('https://www.instagram.com/' + process.env.SBJ, { waitUntil: 'networkidle2' });
		await page.waitForSelector("a[href$='/following/']");
		const user = await page.$eval('h1.K3Sf1', use => use.innerText);
		const flws = await page.$$eval('a[href$="/followers/"]', flw => flw.map(fl => fl.children[0].innerText));
		const flwng = await page.$$eval('a[href$="/following/"]', wng => wng.map(ng => ng.children[0].innerText));
		logS(`\n${user}  Flwrs:${flws}  Flwng:${flwng}\n${timeNow}`);

		//----- Close the 'use the App' button
		const closeBtn = await page.$('button.dCJp8');
		if (closeBtn) {
			await page.tap('button.dCJp8');
		}

		//----go to one of the target accounts
		await page.goto(realtorAccounts[randomAccount], { waitUntil: 'networkidle2' });
		await page.waitForTimeout(r15);
		logS(`Farming this Account: ${realtorAccounts[randomAccount]}`);
		await page.keyboard.press('PageDown');
		await page.waitForTimeout(r(400, 500));
		await page.keyboard.press('PageDown');

		//----click one random post
		const posts = await page.$x('//*[@class="FFVAD"]');
		if (posts.length > 0) {
			await Promise.all([page.waitForNavigation({ waitUntil: 'networkidle2' }), await posts[r(0, posts.length)].tap()]);
			await page.waitForTimeout(r23);
			farmPost = await page.url();
			logS(`Get Users from this post: ${farmPost}`);
		}

		//----click the Likes number on the photo
		await Promise.all([page.waitForNavigation({ waitUntil: 'networkidle2' }), await page.tap('[href$="liked_by/"]')]);
		await page.waitForTimeout(r23);
		//----pagedown 15 times = 90 followers
		for (let i = 0; i < 20; i++) {
			await page.keyboard.press('PageDown');
			await page.waitForTimeout(r(200, 500));
		}

		// ---- get only public likers posts 'div.RR-M-.h5uC0' or '$x('//*[@aria-disabled="false"]')
		const publicHrefs = await page.$$eval('div.RR-M-.h5uC0', pub => pub.map(pu => pu.parentElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.getAttribute('href')));
		logS(`Found ${publicHrefs.length} Public accounts`);
		let rNum = (7, 9);
		logS(`number of loops ${rNum}`);
		if (publicHrefs.length > 0) {
			//---- loop over each profile [y]-times
			for (let x = 0; x < rNum; x++) {
				await page.goto('https://www.instagram.com' + publicHrefs[x], { waitUntil: 'networkidle2' });
				await page.waitForTimeout(r15);
				const currentURL = await page.url();
				const searchBool = badAccounts.includes(currentURL);
				logS(`	★ viewing this story ${currentURL}`);
				if (!searchBool) {
					// view their story
					const viewStoryBtn = await page.$x('//*[@aria-disabled="false"]');
					if (viewStoryBtn.length > 0) {
						await viewStoryBtn[0].tap();
						await page.waitForTimeout(3000);
						await page.goBack({ waitUntil: 'networkidle0' });
					}
					await page.waitForTimeout(r15);
					await page.keyboard.press('PageDown');
					//----- get top 28 posts
					// ------- potentital alternative selector = $('[href^="/p/"]');
					const posts = await page.$x('//*[@class="FFVAD"]');
					if (posts.length > 3) {
						//---- pick a post to like
						const p = r(0, posts.length);
						//----click One random Public post to like
						await Promise.all([page.waitForNavigation(), await posts[p].tap()]);
						await page.waitForTimeout(r23);
						logS(`		♥ Liked this post ` + (await page.url()));
						//----the Like button to hit
						const likeBtn = await page.$x('//*[@aria-label="Like"]');
						if (likeBtn) {
							//----Smash that Like btn
							await likeBtn[0].tap();
							await page.waitForTimeout(r15);
							//add comment method one
							// const commentURL = (await page.url()) + 'comments/';
							// await page.goto(commentURL, { waitUntil: 'networkidle2' });
							// await page.waitForTimeout(r15);
							// await page.tap('textarea.Ypffh');
							// await page.waitForTimeout(r15);
							// const thisComment = comment[r(0, comment.length)];
							// logS(`			✎ Comment: ${thisComment}\n`);
							// await page.type('textarea.Ypffh', thisComment);
							// await page.waitForTimeout(r15);
							// const postBTN = await page.$x('//button[contains(text(), "Post")]');
							// if (postBTN) {
							// 	await postBTN[0].tap();
							// 	await page.waitForTimeout(r15);
							// }
						}
					}
				}
			}
		}
		//BACK AND CLOSE BROWSER
		await browser.close();
		process.exit(1);
	} catch (e) {
		logS('error||||||||||||||>>>>>>>> ' + e);
		process.exit(1);
	}
})();

/*-------click not now app
const appBtn = await page.$x('//*[@href="/"]');
if (appBtn.length > 0) {
await appBtn[0].tap();
console.log('tapped that Not Now button');
await page.waitForTimeout(r23)
else {
					let viewsBtn = await page.$x('//*[@aria-label="Like"]');
					await viewsBtn.tap();
				}
			await page.goto(currentURL + 'comments/', { waitUntil: 'networkidle0' });
			await page.waitForSelector('#react-root');
			await page.waitForTimeout(r(2000, 3000));
			let commentLikeBtn = await page.$x('//*[@aria-label="Like"]');
			if (commentLikeBtn.length > 0) {
				await commentLikeBtn[r(0, commentLikeBtn.length)].tap();
				await page.waitForTimeout(r(2000, 3000));
			}
*/
