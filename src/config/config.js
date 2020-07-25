const common_url = 'http://127.0.0.1:8000/api/';  //服务器地址
const interfaces = {
	GET_FOODLIST:'getFoodList',
	GET_SELECT_FOOD:'getSelectFood',

	LOGIN:'login',
	SENDSMS:'sendsms',
	ZHUCE:'zhuce'
}
module.exports = {
    common_url,
	interfaces
}