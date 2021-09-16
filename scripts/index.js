var access_token = 'IGQVJYYVM2ZAHZAiNmZAvV1ExbDlLSmZANbkJfSGxUMDhVVVFyV3NkaVBMcDZAndzBPMVo0bFUzbUZALRDRXNTlrWU1lYlpNZA3B0SE1fc3hidC1XUThWallNaUZAZAOU1KR2hYS2VfMDIwNE9n', // learn how to obtain it below
	user_id = 17841449707424798,
	num_photos = 8;

var imgCounter = 0;

$.ajax({
	url: 'https://graph.instagram.com/me/media?fields=id&access_token=' + access_token,
	type: 'GET',
	success: function (data) {
		var dataArr = data.data;
		console.log(data);
		for (var i = 0; i < dataArr.length; i++) {
			var obj = dataArr[i];

			for (var key in obj) {
				var value = obj[key];

				$.ajax({
					url: 'https://graph.instagram.com/' + value + '?fields=media_url&access_token=' + access_token,
					type: 'GET',
					success: function (imgData) {
						console.log(imgData.media_url);
						$("#chezfang-img" + ++imgCounter).attr("src", imgData.media_url);
					},
					error: function (imgData) {
						console.log(imgData);
					}
				});
			}
		}
	},
	error: function (data) {
		console.log(data);
	}
});

