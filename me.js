const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
	.create({ defaultLayout: 'main' });
app.use(express.static(__dirname + '\\public'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
	res.render('home');
});
app.get('/about', function (req, res) {
	const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
	res.render('about', { fortune: randomFortune, dick: 'хуй собачий соси сука' });
});
app.use((req, res) => {
	res.status(404);
	res.render('404');
});
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500);
	res.render('500');
});
app.listen(app.get('port'), () => {
	console.log('Express запущен на http://localhost:' +
		app.get('port') + '; нажмите Ctrl+C для завершения.');
})

const fortunes = [
	"Победи свои страхи, или они победят тебя.",
	"Рекам нужны истоки.",
	"Не бойся неведомого.",
	"Тебя ждет приятный сюрприз.",
	"Будь проще везде, где только можно.",
];
