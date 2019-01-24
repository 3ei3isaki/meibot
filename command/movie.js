module.exports = function(message, discord, movie, Args) {
	console.log(Args[2])
	movie(Args[2]).then(data => {
		if (data.original_title == undefined) {
			
			const errMovieInfoEmbed = new discord.RichEmbed()
				.addField(':snowflake: Err Movie Info Command',`➠ 1. Phim này chưa ra mắt hoặc hệ thống chưa cập nhật\n➠ 2. Bạn nhập sai tên phim hoặc bạn bị ngáo XD`,false)
                .setColor('0x80c7d0')
                .setThumbnail('https://media1.tenor.com/images/21515181b13a4dd39202662ebd50e558/tenor.gif')
			message.channel.send(errMovieInfoEmbed)
		
		} else {
			
			const movieInfoEmbed = new discord.RichEmbed()
				.addField(':snowflake: Movie Info Command',`:clapper: :clapper: :clapper:\n**Tên**: ${data.original_title}\n**Ngày phát hành**: ${data.release_date}\n**Điểm trung bình**: **${data.vote_average}** từ **${data.vote_count}** lượt bình chọn`,false)
				.setTitle(`${data.title} - URL (Xem thêm...)`)
				.setURL('https://www.themoviedb.org/movie/' + data.id)
				.setImage(data.imageBase + data.backdrop_path)
	            .setColor('0x80c7d0')
	            .setThumbnail(data.imageBase + data.poster_path)
			message.channel.send(movieInfoEmbed)
		
		}	
	})
}