﻿plugin.Emoji = function (matcher, meaning) {
	this.matcher = matcher;
	this.replacementString = ' <img src="https://a248.e.akamai.net/assets.github.com/images/icons/emoji/' + meaning +
		'.png" class="emoticons" height="24" width="24" style="position:relative; top:2px; margin:-4px 0;" alt="' + meaning +
		'" title="' + meaning + '" /> ';
		//TODO: handle errors:  onerror="this.parentNode.insertBefore(document.createTextNode(\':' + meaning + ':\', this);this.removeNode(true);"
};

plugin.emojis = (function () {
	var allEmoji = [
		//emoticons = [
			[/:-*\)/g, 'blush'],
			[/:-*o/gi, 'scream'],
			[/(:|;)-*]/g, 'smirk'],
			[/(:|;)-*d/gi, 'smiley'],
			[/xd/gi, 'stuck_out_tongue_closed_eyes'],
			[/:-*p/gi, 'stuck_out_tongue_winking_eye'],
			[/:-*(\[|@)/g, 'rage'],
			[/:-*\(/g, 'disappointed'],
			[/:('|’)-*\(/g, 'sob'],
			[/:-*\*/g, 'kissing_heart'],
			[/;-*\)/g, 'wink'],
			[/:-*\//g, 'pensive'],
			[/:-*s/gi, 'confounded'],
			[/:-*\|/g, 'flushed'],
			[/:-*\$/g, 'relaxed'],
			[/:-*x/gi, 'mask'],
			[/<3/g, 'heart'],
			[/<\/3/g, 'broken_heart'],
		//],
		// the rest: 
			[/:(\w+):/gi, "$1"],
		// Ravicons:
			[/:lol:/g, 'laughing'],
			[/:laugh:/g, 'laughing'],
			[/:ravi:/g, 'laughing']
		/*
		//people = [
			[/:bowtie:/g, 'bowtie'],
			[/:smile:/g, 'smile'],
			[/:laughing:/g, 'laughing'],
			[/:blush:/g, 'blush'],
			[/:smiley:/g, 'smiley'],
			[/:relaxed:/g, 'relaxed'],
			[/:smirk:/g, 'smirk'],
			[/:heart_eyes:/g, 'heart_eyes'],
			[/:kissing_heart:/g, 'kissing_heart'],
			[/:kissing_closed_eyes:/g, 'kissing_closed_eyes'],
			[/:flushed:/g, 'flushed'],
			[/:relieved:/g, 'relieved'],
			[/:satisfied:/g, 'satisfied'],
			[/:grin:/g, 'grin'],
			[/:wink:/g, 'wink'],
			[/:wink2:/g, 'wink2'],
			[/:stuck_out_tongue_winking_eye:/g, 'stuck_out_tongue_winking_eye'],
			[/:stuck_out_tongue_closed_eyes:/g, 'stuck_out_tongue_closed_eyes'],
			[/:grinning:/g, 'grinning'],
			[/:kissing:/g, 'kissing'],
			[/:kissing_smiling_eyes:/g, 'kissing_smiling_eyes'],
			[/:stuck_out_tongue:/g, 'stuck_out_tongue'],
			[/:sleeping:/g, 'sleeping'],
			[/:worried:/g, 'worried'],
			[/:frowning:/g, 'frowning'],
			[/:anguished:/g, 'anguished'],
			[/:open_mouth:/g, 'open_mouth'],
			[/:grimacing:/g, 'grimacing'],
			[/:confused:/g, 'confused'],
			[/:hushed:/g, 'hushed'],
			[/:expressionless:/g, 'expressionless'],
			[/:unamused:/g, 'unamused'],
			[/:sweat_smile:/g, 'sweat_smile'],
			[/:sweat:/g, 'sweat'],
			[/:weary:/g, 'weary'],
			[/:pensive:/g, 'pensive'],
			[/:disappointed:/g, 'disappointed'],
			[/:confounded:/g, 'confounded'],
			[/:fearful:/g, 'fearful'],
			[/:cold_sweat:/g, 'cold_sweat'],
			[/:persevere:/g, 'persevere'],
			[/:cry:/g, 'cry'],
			[/:sob:/g, 'sob'],
			[/:joy:/g, 'joy'],
			[/:scream:/g, 'scream'],
			[/:astonished:/g, 'astonished'],
			[/:neckbeard:/g, 'neckbeard'],
			[/:tired_face:/g, 'tired_face'],
			[/:angry:/g, 'angry'],
			[/:rage:/g, 'rage'],
			[/:triumph:/g, 'triumph'],
			[/:sleepy:/g, 'sleepy'],
			[/:yum:/g, 'yum'],
			[/:mask:/g, 'mask'],
			[/:sunglasses:/g, 'sunglasses'],
			[/:dizzy_face:/g, 'dizzy_face'],
			[/:imp:/g, 'imp'],
			[/:smiling_imp:/g, 'smiling_imp'],
			[/:neutral_face:/g, 'neutral_face'],
			[/:no_mouth:/g, 'no_mouth'],
			[/:innocent:/g, 'innocent'],
			[/:alien:/g, 'alien'],
			[/:yellow_heart:/g, 'yellow_heart'],
			[/:blue_heart:/g, 'blue_heart'],
			[/:purple_heart:/g, 'purple_heart'],
			[/:heart:/g, 'heart'],
			[/:green_heart:/g, 'green_heart'],
			[/:broken_heart:/g, 'broken_heart'],
			[/:heartbeat:/g, 'heartbeat'],
			[/:heartpulse:/g, 'heartpulse'],
			[/:two_hearts:/g, 'two_hearts'],
			[/:revolving_hearts:/g, 'revolving_hearts'],
			[/:cupid:/g, 'cupid'],
			[/:sparkling_heart:/g, 'sparkling_heart'],
			[/:sparkles:/g, 'sparkles'],
			[/:star:/g, 'star'],
			[/:star2:/g, 'star2'],
			[/:dizzy:/g, 'dizzy'],
			[/:boom:/g, 'boom'],
			[/:collision:/g, 'collision'],
			[/:anger:/g, 'anger'],
			[/:exclamation:/g, 'exclamation'],
			[/:question:/g, 'question'],
			[/:grey_exclamation:/g, 'grey_exclamation'],
			[/:grey_question:/g, 'grey_question'],
			[/:zzz:/g, 'zzz'],
			[/:dash:/g, 'dash'],
			[/:sweat_drops:/g, 'sweat_drops'],
			[/:notes:/g, 'notes'],
			[/:musical_note:/g, 'musical_note'],
			[/:fire:/g, 'fire'],
			[/:hankey:/g, 'hankey'],
			[/:poop:/g, 'poop'],
			[/:shit:/g, 'shit'],
			[/:thumbsup:|:\+1:/g, 'thumbsup'],
			[/:thumbsdown:|:-1:/g, 'thumbsdown'],
			[/:ok_hand:/g, 'ok_hand'],
			[/:punch:/g, 'punch'],
			[/:facepunch:/g, 'facepunch'],
			[/:fist:/g, 'fist'],
			[/:v:/g, 'v'],
			[/:wave:/g, 'wave'],
			[/:hand:/g, 'hand'],
			[/:open_hands:/g, 'open_hands'],
			[/:point_up:/g, 'point_up'],
			[/:point_down:/g, 'point_down'],
			[/:point_left:/g, 'point_left'],
			[/:point_right:/g, 'point_right'],
			[/:raised_hands:/g, 'raised_hands'],
			[/:pray:/g, 'pray'],
			[/:point_up_2:/g, 'point_up_2'],
			[/:clap:/g, 'clap'],
			[/:muscle:/g, 'muscle'],
			[/:metal:/g, 'metal'],
			[/:walking:/g, 'walking'],
			[/:runner:/g, 'runner'],
			[/:running:/g, 'running'],
			[/:couple:/g, 'couple'],
			[/:family:/g, 'family'],
			[/:two_men_holding_hands:/g, 'two_men_holding_hands'],
			[/:two_women_holding_hands:/g, 'two_women_holding_hands'],
			[/:dancer:/g, 'dancer'],
			[/:dancers:/g, 'dancers'],
			[/:ok_woman:/g, 'ok_woman'],
			[/:no_good:/g, 'no_good'],
			[/:information_desk_person:/g, 'information_desk_person'],
			[/:raised_hand:/g, 'raised_hand'],
			[/:bride_with_veil:/g, 'bride_with_veil'],
			[/:person_with_pouting_face:/g, 'person_with_pouting_face'],
			[/:person_frowning:/g, 'person_frowning'],
			[/:bow:/g, 'bow'],
			[/:couplekiss:/g, 'couplekiss'],
			[/:couple_with_heart:/g, 'couple_with_heart'],
			[/:massage:/g, 'massage'],
			[/:haircut:/g, 'haircut'],
			[/:nail_care:/g, 'nail_care'],
			[/:boy:/g, 'boy'],
			[/:girl:/g, 'girl'],
			[/:woman:/g, 'woman'],
			[/:man:/g, 'man'],
			[/:baby:/g, 'baby'],
			[/:older_woman:/g, 'older_woman'],
			[/:older_man:/g, 'older_man'],
			[/:person_with_blond_hair:/g, 'person_with_blond_hair'],
			[/:man_with_gua_pi_mao:/g, 'man_with_gua_pi_mao'],
			[/:man_with_turban:/g, 'man_with_turban'],
			[/:construction_worker:/g, 'construction_worker'],
			[/:cop:/g, 'cop'],
			[/:angel:/g, 'angel'],
			[/:princess:/g, 'princess'],
			[/:smiley_cat:/g, 'smiley_cat'],
			[/:smile_cat:/g, 'smile_cat'],
			[/:heart_eyes_cat:/g, 'heart_eyes_cat'],
			[/:kissing_cat:/g, 'kissing_cat'],
			[/:smirk_cat:/g, 'smirk_cat'],
			[/:scream_cat:/g, 'scream_cat'],
			[/:crying_cat_face:/g, 'crying_cat_face'],
			[/:joy_cat:/g, 'joy_cat'],
			[/:pouting_cat:/g, 'pouting_cat'],
			[/:japanese_ogre:/g, 'japanese_ogre'],
			[/:japanese_goblin:/g, 'japanese_goblin'],
			[/:see_no_evil:/g, 'see_no_evil'],
			[/:hear_no_evil:/g, 'hear_no_evil'],
			[/:speak_no_evil:/g, 'speak_no_evil'],
			[/:guardsman:/g, 'guardsman'],
			[/:skull:/g, 'skull'],
			[/:feet:/g, 'feet'],
			[/:lips:/g, 'lips'],
			[/:kiss:/g, 'kiss'],
			[/:droplet:/g, 'droplet'],
			[/:ear:/g, 'ear'],
			[/:eyes:/g, 'eyes'],
			[/:nose:/g, 'nose'],
			[/:tongue:/g, 'tongue'],
			[/:love_letter:/g, 'love_letter'],
			[/:bust_in_silhouette:/g, 'bust_in_silhouette'],
			[/:busts_in_silhouette:/g, 'busts_in_silhouette'],
			[/:speech_balloon:/g, 'speech_balloon'],
			[/:thought_balloon:/g, 'thought_balloon'],
			[/:feelsgood:/g, 'feelsgood'],
			[/:finnadie:/g, 'finnadie'],
			[/:goberserk:/g, 'goberserk'],
			[/:godmode:/g, 'godmode'],
			[/:hurtrealbad:/g, 'hurtrealbad'],
			[/:rage1:/g, 'rage1'],
			[/:rage2:/g, 'rage2'],
			[/:rage3:/g, 'rage3'],
			[/:rage4:/g, 'rage4'],
			[/:suspect:/g, 'suspect'],
			[/:trollface:/g, 'trollface'],
		//],
		//nature = [
			[/:sunny:/g, 'sunny'],
			[/:umbrella:/g, 'umbrella'],
			[/:cloud:/g, 'cloud'],
			[/:snowflake:/g, 'snowflake'],
			[/:snowman:/g, 'snowman'],
			[/:zap:/g, 'zap'],
			[/:cyclone:/g, 'cyclone'],
			[/:foggy:/g, 'foggy'],
			[/:ocean:/g, 'ocean'],
			[/:cat:/g, 'cat'],
			[/:dog:/g, 'dog'],
			[/:mouse:/g, 'mouse'],
			[/:hamster:/g, 'hamster'],
			[/:rabbit:/g, 'rabbit'],
			[/:wolf:/g, 'wolf'],
			[/:frog:/g, 'frog'],
			[/:tiger:/g, 'tiger'],
			[/:koala:/g, 'koala'],
			[/:bear:/g, 'bear'],
			[/:pig:/g, 'pig'],
			[/:pig_nose:/g, 'pig_nose'],
			[/:cow:/g, 'cow'],
			[/:boar:/g, 'boar'],
			[/:monkey_face:/g, 'monkey_face'],
			[/:monkey:/g, 'monkey'],
			[/:horse:/g, 'horse'],
			[/:racehorse:/g, 'racehorse'],
			[/:camel:/g, 'camel'],
			[/:sheep:/g, 'sheep'],
			[/:elephant:/g, 'elephant'],
			[/:panda_face:/g, 'panda_face'],
			[/:snake:/g, 'snake'],
			[/:bird:/g, 'bird'],
			[/:baby_chick:/g, 'baby_chick'],
			[/:hatched_chick:/g, 'hatched_chick'],
			[/:hatching_chick:/g, 'hatching_chick'],
			[/:chicken:/g, 'chicken'],
			[/:penguin:/g, 'penguin'],
			[/:turtle:/g, 'turtle'],
			[/:bug:/g, 'bug'],
			[/:honeybee:/g, 'honeybee'],
			[/:ant:/g, 'ant'],
			[/:beetle:/g, 'beetle'],
			[/:snail:/g, 'snail'],
			[/:octopus:/g, 'octopus'],
			[/:tropical_fish:/g, 'tropical_fish'],
			[/:fish:/g, 'fish'],
			[/:whale:/g, 'whale'],
			[/:whale2:/g, 'whale2'],
			[/:dolphin:/g, 'dolphin'],
			[/:cow2:/g, 'cow2'],
			[/:ram:/g, 'ram'],
			[/:rat:/g, 'rat'],
			[/:water_buffalo:/g, 'water_buffalo'],
			[/:tiger2:/g, 'tiger2'],
			[/:rabbit2:/g, 'rabbit2'],
			[/:dragon:/g, 'dragon'],
			[/:goat:/g, 'goat'],
			[/:rooster:/g, 'rooster'],
			[/:dog2:/g, 'dog2'],
			[/:pig2:/g, 'pig2'],
			[/:mouse2:/g, 'mouse2'],
			[/:ox:/g, 'ox'],
			[/:dragon_face:/g, 'dragon_face'],
			[/:blowfish:/g, 'blowfish'],
			[/:crocodile:/g, 'crocodile'],
			[/:dromedary_camel:/g, 'dromedary_camel'],
			[/:leopard:/g, 'leopard'],
			[/:cat2:/g, 'cat2'],
			[/:poodle:/g, 'poodle'],
			[/:paw_prints:/g, 'paw_prints'],
			[/:bouquet:/g, 'bouquet'],
			[/:cherry_blossom:/g, 'cherry_blossom'],
			[/:tulip:/g, 'tulip'],
			[/:four_leaf_clover:/g, 'four_leaf_clover'],
			[/:rose:/g, 'rose'],
			[/:sunflower:/g, 'sunflower'],
			[/:hibiscus:/g, 'hibiscus'],
			[/:maple_leaf:/g, 'maple_leaf'],
			[/:leaves:/g, 'leaves'],
			[/:fallen_leaf:/g, 'fallen_leaf'],
			[/:herb:/g, 'herb'],
			[/:mushroom:/g, 'mushroom'],
			[/:cactus:/g, 'cactus'],
			[/:palm_tree:/g, 'palm_tree'],
			[/:evergreen_tree:/g, 'evergreen_tree'],
			[/:deciduous_tree:/g, 'deciduous_tree'],
			[/:chestnut:/g, 'chestnut'],
			[/:seedling:/g, 'seedling'],
			[/:blossom:/g, 'blossom'],
			[/:ear_of_rice:/g, 'ear_of_rice'],
			[/:shell:/g, 'shell'],
			[/:globe_with_meridians:/g, 'globe_with_meridians'],
			[/:sun_with_face:/g, 'sun_with_face'],
			[/:full_moon_with_face:/g, 'full_moon_with_face'],
			[/:new_moon_with_face:/g, 'new_moon_with_face'],
			[/:new_moon:/g, 'new_moon'],
			[/:waxing_crescent_moon:/g, 'waxing_crescent_moon'],
			[/:first_quarter_moon:/g, 'first_quarter_moon'],
			[/:waxing_gibbous_moon:/g, 'waxing_gibbous_moon'],
			[/:full_moon:/g, 'full_moon'],
			[/:waning_gibbous_moon:/g, 'waning_gibbous_moon'],
			[/:last_quarter_moon:/g, 'last_quarter_moon'],
			[/:waning_crescent_moon:/g, 'waning_crescent_moon'],
			[/:last_quarter_moon_with_face:/g, 'last_quarter_moon_with_face'],
			[/:first_quarter_moon_with_face:/g, 'first_quarter_moon_with_face'],
			[/:moon:/g, 'moon'],
			[/:earth_africa:/g, 'earth_africa'],
			[/:earth_americas:/g, 'earth_americas'],
			[/:earth_asia:/g, 'earth_asia'],
			[/:volcano:/g, 'volcano'],
			[/:milky_way:/g, 'milky_way'],
			[/:partly_sunny:/g, 'partly_sunny'],
			[/:octocat:/g, 'octocat'],
			[/:squirrel:/g, 'squirrel'],
		//],
		//objects = [
			[/:bamboo:/g, 'bamboo'],
			[/:gift_heart:/g, 'gift_heart'],
			[/:dolls:/g, 'dolls'],
			[/:school_satchel:/g, 'school_satchel'],
			[/:mortar_board:/g, 'mortar_board'],
			[/:flags:/g, 'flags'],
			[/:fireworks:/g, 'fireworks'],
			[/:sparkler:/g, 'sparkler'],
			[/:wind_chime:/g, 'wind_chime'],
			[/:rice_scene:/g, 'rice_scene'],
			[/:jack_o_lantern:/g, 'jack_o_lantern'],
			[/:ghost:/g, 'ghost'],
			[/:santa:/g, 'santa'],
			[/:christmas_tree:/g, 'christmas_tree'],
			[/:gift:/g, 'gift'],
			[/:bell:/g, 'bell'],
			[/:no_bell:/g, 'no_bell'],
			[/:tanabata_tree:/g, 'tanabata_tree'],
			[/:tada:/g, 'tada'],
			[/:confetti_ball:/g, 'confetti_ball'],
			[/:balloon:/g, 'balloon'],
			[/:crystal_ball:/g, 'crystal_ball'],
			[/:cd:/g, 'cd'],
			[/:dvd:/g, 'dvd'],
			[/:floppy_disk:/g, 'floppy_disk'],
			[/:camera:/g, 'camera'],
			[/:video_camera:/g, 'video_camera'],
			[/:movie_camera:/g, 'movie_camera'],
			[/:computer:/g, 'computer'],
			[/:tv:/g, 'tv'],
			[/:iphone:/g, 'iphone'],
			[/:phone:/g, 'phone'],
			[/:telephone:/g, 'telephone'],
			[/:telephone_receiver:/g, 'telephone_receiver'],
			[/:pager:/g, 'pager'],
			[/:fax:/g, 'fax'],
			[/:minidisc:/g, 'minidisc'],
			[/:vhs:/g, 'vhs'],
			[/:sound:/g, 'sound'],
			[/:speaker:/g, 'speaker'],
			[/:mute:/g, 'mute'],
			[/:loudspeaker:/g, 'loudspeaker'],
			[/:mega:/g, 'mega'],
			[/:hourglass:/g, 'hourglass'],
			[/:hourglass_flowing_sand:/g, 'hourglass_flowing_sand'],
			[/:alarm_clock:/g, 'alarm_clock'],
			[/:watch:/g, 'watch'],
			[/:radio:/g, 'radio'],
			[/:satellite:/g, 'satellite'],
			[/:loop:/g, 'loop'],
			[/:mag:/g, 'mag'],
			[/:mag_right:/g, 'mag_right'],
			[/:unlock:/g, 'unlock'],
			[/:lock:/g, 'lock'],
			[/:lock_with_ink_pen:/g, 'lock_with_ink_pen'],
			[/:closed_lock_with_key:/g, 'closed_lock_with_key'],
			[/:key:/g, 'key'],
			[/:bulb:/g, 'bulb'],
			[/:flashlight:/g, 'flashlight'],
			[/:high_brightness:/g, 'high_brightness'],
			[/:low_brightness:/g, 'low_brightness'],
			[/:electric_plug:/g, 'electric_plug'],
			[/:battery:/g, 'battery'],
			[/:calling:/g, 'calling'],
			[/:email:/g, 'email'],
			[/:mailbox:/g, 'mailbox'],
			[/:postbox:/g, 'postbox'],
			[/:bath:/g, 'bath'],
			[/:bathtub:/g, 'bathtub'],
			[/:shower:/g, 'shower'],
			[/:toilet:/g, 'toilet'],
			[/:wrench:/g, 'wrench'],
			[/:nut_and_bolt:/g, 'nut_and_bolt'],
			[/:hammer:/g, 'hammer'],
			[/:seat:/g, 'seat'],
			[/:moneybag:/g, 'moneybag'],
			[/:yen:/g, 'yen'],
			[/:dollar:/g, 'dollar'],
			[/:pound:/g, 'pound'],
			[/:euro:/g, 'euro'],
			[/:credit_card:/g, 'credit_card'],
			[/:money_with_wings:/g, 'money_with_wings'],
			[/:e-mail:/g, 'e-mail'],
			[/:inbox_tray:/g, 'inbox_tray'],
			[/:outbox_tray:/g, 'outbox_tray'],
			[/:envelope:/g, 'envelope'],
			[/:incoming_envelope:/g, 'incoming_envelope'],
			[/:postal_horn:/g, 'postal_horn'],
			[/:mailbox_closed:/g, 'mailbox_closed'],
			[/:mailbox_with_mail:/g, 'mailbox_with_mail'],
			[/:mailbox_with_no_mail:/g, 'mailbox_with_no_mail'],
			[/:door:/g, 'door'],
			[/:smoking:/g, 'smoking'],
			[/:bomb:/g, 'bomb'],
			[/:gun:/g, 'gun'],
			[/:hocho:/g, 'hocho'],
			[/:pill:/g, 'pill'],
			[/:syringe:/g, 'syringe'],
			[/:page_facing_up:/g, 'page_facing_up'],
			[/:page_with_curl:/g, 'page_with_curl'],
			[/:bookmark_tabs:/g, 'bookmark_tabs'],
			[/:bar_chart:/g, 'bar_chart'],
			[/:chart_with_upwards_trend:/g, 'chart_with_upwards_trend'],
			[/:chart_with_downwards_trend:/g, 'chart_with_downwards_trend'],
			[/:scroll:/g, 'scroll'],
			[/:clipboard:/g, 'clipboard'],
			[/:calendar:/g, 'calendar'],
			[/:date:/g, 'date'],
			[/:card_index:/g, 'card_index'],
			[/:file_folder:/g, 'file_folder'],
			[/:open_file_folder:/g, 'open_file_folder'],
			[/:scissors:/g, 'scissors'],
			[/:pushpin:/g, 'pushpin'],
			[/:paperclip:/g, 'paperclip'],
			[/:black_nib:/g, 'black_nib'],
			[/:pencil2:/g, 'pencil2'],
			[/:straight_ruler:/g, 'straight_ruler'],
			[/:triangular_ruler:/g, 'triangular_ruler'],
			[/:closed_book:/g, 'closed_book'],
			[/:green_book:/g, 'green_book'],
			[/:blue_book:/g, 'blue_book'],
			[/:orange_book:/g, 'orange_book'],
			[/:notebook:/g, 'notebook'],
			[/:notebook_with_decorative_cover:/g, 'notebook_with_decorative_cover'],
			[/:ledger:/g, 'ledger'],
			[/:books:/g, 'books'],
			[/:bookmark:/g, 'bookmark'],
			[/:name_badge:/g, 'name_badge'],
			[/:microscope:/g, 'microscope'],
			[/:telescope:/g, 'telescope'],
			[/:newspaper:/g, 'newspaper'],
			[/:football:/g, 'football'],
			[/:basketball:/g, 'basketball'],
			[/:soccer:/g, 'soccer'],
			[/:baseball:/g, 'baseball'],
			[/:tennis:/g, 'tennis'],
			[/:8ball:/g, 'eightball'],
			[/:rugby_football:/g, 'rugby_football'],
			[/:bowling:/g, 'bowling'],
			[/:golf:/g, 'golf'],
			[/:mountain_bicyclist:/g, 'mountain_bicyclist'],
			[/:bicyclist:/g, 'bicyclist'],
			[/:horse_racing:/g, 'horse_racing'],
			[/:snowboarder:/g, 'snowboarder'],
			[/:swimmer:/g, 'swimmer'],
			[/:surfer:/g, 'surfer'],
			[/:ski:/g, 'ski'],
			[/:spades:/g, 'spades'],
			[/:hearts:/g, 'hearts'],
			[/:clubs:/g, 'clubs'],
			[/:diamonds:/g, 'diamonds'],
			[/:gem:/g, 'gem'],
			[/:ring:/g, 'ring'],
			[/:trophy:/g, 'trophy'],
			[/:musical_score:/g, 'musical_score'],
			[/:musical_keyboard:/g, 'musical_keyboard'],
			[/:violin:/g, 'violin'],
			[/:space_invader:/g, 'space_invader'],
			[/:video_game:/g, 'video_game'],
			[/:black_joker:/g, 'black_joker'],
			[/:flower_playing_cards:/g, 'flower_playing_cards'],
			[/:game_die:/g, 'game_die'],
			[/:dart:/g, 'dart'],
			[/:mahjong:/g, 'mahjong'],
			[/:clapper:/g, 'clapper'],
			[/:memo:/g, 'memo'],
			[/:pencil:/g, 'pencil'],
			[/:book:/g, 'book'],
			[/:art:/g, 'art'],
			[/:microphone:/g, 'microphone'],
			[/:headphones:/g, 'headphones'],
			[/:trumpet:/g, 'trumpet'],
			[/:saxophone:/g, 'saxophone'],
			[/:guitar:/g, 'guitar'],
			[/:shoe:/g, 'shoe'],
			[/:sandal:/g, 'sandal'],
			[/:high_heel:/g, 'high_heel'],
			[/:lipstick:/g, 'lipstick'],
			[/:boot:/g, 'boot'],
			[/:shirt:/g, 'shirt'],
			[/:tshirt:/g, 'tshirt'],
			[/:necktie:/g, 'necktie'],
			[/:womans_clothes:/g, 'womans_clothes'],
			[/:dress:/g, 'dress'],
			[/:running_shirt_with_sash:/g, 'running_shirt_with_sash'],
			[/:jeans:/g, 'jeans'],
			[/:kimono:/g, 'kimono'],
			[/:bikini:/g, 'bikini'],
			[/:ribbon:/g, 'ribbon'],
			[/:tophat:/g, 'tophat'],
			[/:crown:/g, 'crown'],
			[/:womans_hat:/g, 'womans_hat'],
			[/:mans_shoe:/g, 'mans_shoe'],
			[/:closed_umbrella:/g, 'closed_umbrella'],
			[/:briefcase:/g, 'briefcase'],
			[/:handbag:/g, 'handbag'],
			[/:pouch:/g, 'pouch'],
			[/:purse:/g, 'purse'],
			[/:eyeglasses:/g, 'eyeglasses'],
			[/:fishing_pole_and_fish:/g, 'fishing_pole_and_fish'],
			[/:coffee:/g, 'coffee'],
			[/:tea:/g, 'tea'],
			[/:sake:/g, 'sake'],
			[/:baby_bottle:/g, 'baby_bottle'],
			[/:beer:/g, 'beer'],
			[/:beers:/g, 'beers'],
			[/:cocktail:/g, 'cocktail'],
			[/:tropical_drink:/g, 'tropical_drink'],
			[/:wine_glass:/g, 'wine_glass'],
			[/:fork_and_knife:/g, 'fork_and_knife'],
			[/:pizza:/g, 'pizza'],
			[/:hamburger:/g, 'hamburger'],
			[/:fries:/g, 'fries'],
			[/:poultry_leg:/g, 'poultry_leg'],
			[/:meat_on_bone:/g, 'meat_on_bone'],
			[/:spaghetti:/g, 'spaghetti'],
			[/:curry:/g, 'curry'],
			[/:fried_shrimp:/g, 'fried_shrimp'],
			[/:bento:/g, 'bento'],
			[/:sushi:/g, 'sushi'],
			[/:fish_cake:/g, 'fish_cake'],
			[/:rice_ball:/g, 'rice_ball'],
			[/:rice_cracker:/g, 'rice_cracker'],
			[/:rice:/g, 'rice'],
			[/:ramen:/g, 'ramen'],
			[/:stew:/g, 'stew'],
			[/:oden:/g, 'oden'],
			[/:dango:/g, 'dango'],
			[/:egg:/g, 'egg'],
			[/:bread:/g, 'bread'],
			[/:doughnut:/g, 'doughnut'],
			[/:custard:/g, 'custard'],
			[/:icecream:/g, 'icecream'],
			[/:ice_cream:/g, 'ice_cream'],
			[/:shaved_ice:/g, 'shaved_ice'],
			[/:birthday:/g, 'birthday'],
			[/:cake:/g, 'cake'],
			[/:cookie:/g, 'cookie'],
			[/:chocolate_bar:/g, 'chocolate_bar'],
			[/:candy:/g, 'candy'],
			[/:lollipop:/g, 'lollipop'],
			[/:honey_pot:/g, 'honey_pot'],
			[/:apple:/g, 'apple'],
			[/:green_apple:/g, 'green_apple'],
			[/:tangerine:/g, 'tangerine'],
			[/:lemon:/g, 'lemon'],
			[/:cherries:/g, 'cherries'],
			[/:grapes:/g, 'grapes'],
			[/:watermelon:/g, 'watermelon'],
			[/:strawberry:/g, 'strawberry'],
			[/:peach:/g, 'peach'],
			[/:melon:/g, 'melon'],
			[/:banana:/g, 'banana'],
			[/:pear:/g, 'pear'],
			[/:pineapple:/g, 'pineapple'],
			[/:sweet_potato:/g, 'sweet_potato'],
			[/:eggplant:/g, 'eggplant'],
			[/:tomato:/g, 'tomato'],
			[/:corn:/g, 'corn'],
		//],
		//places = [
			[/:109:/g, 'onezeronine'],
			[/:house:/g, 'house'],
			[/:house_with_garden:/g, 'house_with_garden'],
			[/:school:/g, 'school'],
			[/:office:/g, 'office'],
			[/:post_office:/g, 'post_office'],
			[/:hospital:/g, 'hospital'],
			[/:bank:/g, 'bank'],
			[/:convenience_store:/g, 'convenience_store'],
			[/:love_hotel:/g, 'love_hotel'],
			[/:hotel:/g, 'hotel'],
			[/:wedding:/g, 'wedding'],
			[/:church:/g, 'church'],
			[/:department_store:/g, 'department_store'],
			[/:european_post_office:/g, 'european_post_office'],
			[/:city_sunrise:/g, 'city_sunrise'],
			[/:city_sunset:/g, 'city_sunset'],
			[/:japanese_castle:/g, 'japanese_castle'],
			[/:european_castle:/g, 'european_castle'],
			[/:tent:/g, 'tent'],
			[/:factory:/g, 'factory'],
			[/:tokyo_tower:/g, 'tokyo_tower'],
			[/:japan:/g, 'japan'],
			[/:mount_fuji:/g, 'mount_fuji'],
			[/:sunrise_over_mountains:/g, 'sunrise_over_mountains'],
			[/:sunrise:/g, 'sunrise'],
			[/:stars:/g, 'stars'],
			[/:statue_of_liberty:/g, 'statue_of_liberty'],
			[/:bridge_at_night:/g, 'bridge_at_night'],
			[/:carousel_horse:/g, 'carousel_horse'],
			[/:rainbow:/g, 'rainbow'],
			[/:ferris_wheel:/g, 'ferris_wheel'],
			[/:fountain:/g, 'fountain'],
			[/:roller_coaster:/g, 'roller_coaster'],
			[/:ship:/g, 'ship'],
			[/:speedboat:/g, 'speedboat'],
			[/:boat:/g, 'boat'],
			[/:sailboat:/g, 'sailboat'],
			[/:rowboat:/g, 'rowboat'],
			[/:anchor:/g, 'anchor'],
			[/:rocket:/g, 'rocket'],
			[/:airplane:/g, 'airplane'],
			[/:helicopter:/g, 'helicopter'],
			[/:steam_locomotive:/g, 'steam_locomotive'],
			[/:tram:/g, 'tram'],
			[/:mountain_railway:/g, 'mountain_railway'],
			[/:bike:/g, 'bike'],
			[/:aerial_tramway:/g, 'aerial_tramway'],
			[/:suspension_railway:/g, 'suspension_railway'],
			[/:mountain_cableway:/g, 'mountain_cableway'],
			[/:tractor:/g, 'tractor'],
			[/:blue_car:/g, 'blue_car'],
			[/:oncoming_automobile:/g, 'oncoming_automobile'],
			[/:car:/g, 'car'],
			[/:red_car:/g, 'red_car'],
			[/:taxi:/g, 'taxi'],
			[/:oncoming_taxi:/g, 'oncoming_taxi'],
			[/:articulated_lorry:/g, 'articulated_lorry'],
			[/:bus:/g, 'bus'],
			[/:oncoming_bus:/g, 'oncoming_bus'],
			[/:rotating_light:/g, 'rotating_light'],
			[/:police_car:/g, 'police_car'],
			[/:oncoming_police_car:/g, 'oncoming_police_car'],
			[/:fire_engine:/g, 'fire_engine'],
			[/:ambulance:/g, 'ambulance'],
			[/:minibus:/g, 'minibus'],
			[/:truck:/g, 'truck'],
			[/:train:/g, 'train'],
			[/:station:/g, 'station'],
			[/:train2:/g, 'train2'],
			[/:bullettrain_front:/g, 'bullettrain_front'],
			[/:bullettrain_side:/g, 'bullettrain_side'],
			[/:light_rail:/g, 'light_rail'],
			[/:monorail:/g, 'monorail'],
			[/:railway_car:/g, 'railway_car'],
			[/:trolleybus:/g, 'trolleybus'],
			[/:ticket:/g, 'ticket'],
			[/:fuelpump:/g, 'fuelpump'],
			[/:vertical_traffic_light:/g, 'vertical_traffic_light'],
			[/:traffic_light:/g, 'traffic_light'],
			[/:warning:/g, 'warning'],
			[/:construction:/g, 'construction'],
			[/:beginner:/g, 'beginner'],
			[/:atm:/g, 'atm'],
			[/:slot_machine:/g, 'slot_machine'],
			[/:busstop:/g, 'busstop'],
			[/:barber:/g, 'barber'],
			[/:hotsprings:/g, 'hotsprings'],
			[/:checkered_flag:/g, 'checkered_flag'],
			[/:crossed_flags:/g, 'crossed_flags'],
			[/:izakaya_lantern:/g, 'izakaya_lantern'],
			[/:moyai:/g, 'moyai'],
			[/:circus_tent:/g, 'circus_tent'],
			[/:performing_arts:/g, 'performing_arts'],
			[/:round_pushpin:/g, 'round_pushpin'],
			[/:triangular_flag_on_post:/g, 'triangular_flag_on_post'],
			[/:jp:/g, 'jp'],
			[/:kr:/g, 'kr'],
			[/:cn:/g, 'cn'],
			[/:us:/g, 'us'],
			[/:fr:/g, 'fr'],
			[/:es:/g, 'es'],
			[/:it:/g, 'it'],
			[/:ru:/g, 'ru'],
			[/:gb:/g, 'gb'],
			[/:uk:/g, 'uk'],
			[/:de:/g, 'de'],
		//],
		//symbols = [
			[/:one:/g, 'one'],
			[/:two:/g, 'two'],
			[/:three:/g, 'three'],
			[/:four:/g, 'four'],
			[/:five:/g, 'five'],
			[/:six:/g, 'six'],
			[/:seven:/g, 'seven'],
			[/:eight:/g, 'eight'],
			[/:nine:/g, 'nine'],
			[/:keycap_ten:/g, 'keycap_ten'],
			[/:1234:/g, 'onetwothreefour'],
			[/:zero:/g, 'zero'],
			[/:hash:/g, 'hash'],
			[/:symbols:/g, 'symbols'],
			[/:arrow_backward:/g, 'arrow_backward'],
			[/:arrow_down:/g, 'arrow_down'],
			[/:arrow_forward:/g, 'arrow_forward'],
			[/:arrow_left:/g, 'arrow_left'],
			[/:capital_abcd:/g, 'capital_abcd'],
			[/:abcd:/g, 'abcd'],
			[/:abc:/g, 'abc'],
			[/:arrow_lower_left:/g, 'arrow_lower_left'],
			[/:arrow_lower_right:/g, 'arrow_lower_right'],
			[/:arrow_right:/g, 'arrow_right'],
			[/:arrow_up:/g, 'arrow_up'],
			[/:arrow_upper_left:/g, 'arrow_upper_left'],
			[/:arrow_upper_right:/g, 'arrow_upper_right'],
			[/:arrow_double_down:/g, 'arrow_double_down'],
			[/:arrow_double_up:/g, 'arrow_double_up'],
			[/:arrow_down_small:/g, 'arrow_down_small'],
			[/:arrow_heading_down:/g, 'arrow_heading_down'],
			[/:arrow_heading_up:/g, 'arrow_heading_up'],
			[/:leftwards_arrow_with_hook:/g, 'leftwards_arrow_with_hook'],
			[/:arrow_right_hook:/g, 'arrow_right_hook'],
			[/:left_right_arrow:/g, 'left_right_arrow'],
			[/:arrow_up_down:/g, 'arrow_up_down'],
			[/:arrow_up_small:/g, 'arrow_up_small'],
			[/:arrows_clockwise:/g, 'arrows_clockwise'],
			[/:arrows_counterclockwise:/g, 'arrows_counterclockwise'],
			[/:rewind:/g, 'rewind'],
			[/:fast_forward:/g, 'fast_forward'],
			[/:information_source:/g, 'information_source'],
			[/:ok:/g, 'ok'],
			[/:twisted_rightwards_arrows:/g, 'twisted_rightwards_arrows'],
			[/:repeat:/g, 'repeat'],
			[/:repeat_one:/g, 'repeat_one'],
			[/:new:/g, 'new'],
			[/:top:/g, 'top'],
			[/:up:/g, 'up'],
			[/:cool:/g, 'cool'],
			[/:free:/g, 'free'],
			[/:ng:/g, 'ng'],
			[/:cinema:/g, 'cinema'],
			[/:koko:/g, 'koko'],
			[/:signal_strength:/g, 'signal_strength'],
			[/:u5272:/g, 'u5272'],
			[/:u5408:/g, 'u5408'],
			[/:u55b6:/g, 'u55b6'],
			[/:u6307:/g, 'u6307'],
			[/:u6708:/g, 'u6708'],
			[/:u6709:/g, 'u6709'],
			[/:u6e80:/g, 'u6e80'],
			[/:u7121:/g, 'u7121'],
			[/:u7533:/g, 'u7533'],
			[/:u7a7a:/g, 'u7a7a'],
			[/:u7981:/g, 'u7981'],
			[/:sa:/g, 'sa'],
			[/:restroom:/g, 'restroom'],
			[/:mens:/g, 'mens'],
			[/:womens:/g, 'womens'],
			[/:baby_symbol:/g, 'baby_symbol'],
			[/:no_smoking:/g, 'no_smoking'],
			[/:parking:/g, 'parking'],
			[/:wheelchair:/g, 'wheelchair'],
			[/:metro:/g, 'metro'],
			[/:baggage_claim:/g, 'baggage_claim'],
			[/:accept:/g, 'accept'],
			[/:wc:/g, 'wc'],
			[/:potable_water:/g, 'potable_water'],
			[/:put_litter_in_its_place:/g, 'put_litter_in_its_place'],
			[/:secret:/g, 'secret'],
			[/:congratulations:/g, 'congratulations'],
			[/:m:/g, 'm'],
			[/:passport_control:/g, 'passport_control'],
			[/:left_luggage:/g, 'left_luggage'],
			[/:customs:/g, 'customs'],
			[/:ideograph_advantage:/g, 'ideograph_advantage'],
			[/:cl:/g, 'cl'],
			[/:sos:/g, 'sos'],
			[/:id:/g, 'id'],
			[/:no_entry_sign:/g, 'no_entry_sign'],
			[/:underage:/g, 'underage'],
			[/:no_mobile_phones:/g, 'no_mobile_phones'],
			[/:do_not_litter:/g, 'do_not_litter'],
			[/:non-potable_water:/g, 'non-potable_water'],
			[/:no_bicycles:/g, 'no_bicycles'],
			[/:no_pedestrians:/g, 'no_pedestrians'],
			[/:children_crossing:/g, 'children_crossing'],
			[/:no_entry:/g, 'no_entry'],
			[/:eight_spoked_asterisk:/g, 'eight_spoked_asterisk'],
			[/:eight_pointed_black_star:/g, 'eight_pointed_black_star'],
			[/:heart_decoration:/g, 'heart_decoration'],
			[/:vs:/g, 'vs'],
			[/:vibration_mode:/g, 'vibration_mode'],
			[/:mobile_phone_off:/g, 'mobile_phone_off'],
			[/:chart:/g, 'chart'],
			[/:currency_exchange:/g, 'currency_exchange'],
			[/:aries:/g, 'aries'],
			[/:taurus:/g, 'taurus'],
			[/:gemini:/g, 'gemini'],
			[/:cancer:/g, 'cancer'],
			[/:leo:/g, 'leo'],
			[/:virgo:/g, 'virgo'],
			[/:libra:/g, 'libra'],
			[/:scorpius:/g, 'scorpius'],
			[/:sagittarius:/g, 'sagittarius'],
			[/:capricorn:/g, 'capricorn'],
			[/:aquarius:/g, 'aquarius'],
			[/:pisces:/g, 'pisces'],
			[/:ophiuchus:/g, 'ophiuchus'],
			[/:six_pointed_star:/g, 'six_pointed_star'],
			[/:negative_squared_cross_mark:/g, 'negative_squared_cross_mark'],
			[/:a:/g, 'a'],
			[/:b:/g, 'b'],
			[/:ab:/g, 'ab'],
			[/:o2:/g, 'o2'],
			[/:diamond_shape_with_a_dot_inside:/g, 'diamond_shape_with_a_dot_inside'],
			[/:recycle:/g, 'recycle'],
			[/:end:/g, 'end'],
			[/:on:/g, 'on'],
			[/:soon:/g, 'soon'],
			[/:clock1:/g, 'clock1'],
			[/:clock130:/g, 'clock130'],
			[/:clock10:/g, 'clock10'],
			[/:clock1030:/g, 'clock1030'],
			[/:clock11:/g, 'clock11'],
			[/:clock1130:/g, 'clock1130'],
			[/:clock12:/g, 'clock12'],
			[/:clock1230:/g, 'clock1230'],
			[/:clock2:/g, 'clock2'],
			[/:clock230:/g, 'clock230'],
			[/:clock3:/g, 'clock3'],
			[/:clock330:/g, 'clock330'],
			[/:clock4:/g, 'clock4'],
			[/:clock430:/g, 'clock430'],
			[/:clock5:/g, 'clock5'],
			[/:clock530:/g, 'clock530'],
			[/:clock6:/g, 'clock6'],
			[/:clock630:/g, 'clock630'],
			[/:clock7:/g, 'clock7'],
			[/:clock730:/g, 'clock730'],
			[/:clock8:/g, 'clock8'],
			[/:clock830:/g, 'clock830'],
			[/:clock9:/g, 'clock9'],
			[/:clock930:/g, 'clock930'],
			[/:heavy_dollar_sign:/g, 'heavy_dollar_sign'],
			[/:copyright:/g, 'copyright'],
			[/:registered:/g, 'registered'],
			[/:tm:/g, 'tm'],
			[/:x:/g, 'x'],
			[/:heavy_exclamation_mark:/g, 'heavy_exclamation_mark'],
			[/:bangbang:/g, 'bangbang'],
			[/:interrobang:/g, 'interrobang'],
			[/:o:/g, 'o'],
			[/:heavy_multiplication_x:/g, 'heavy_multiplication_x'],
			[/:heavy_plus_sign:/g, 'heavy_plus_sign'],
			[/:heavy_minus_sign:/g, 'heavy_minus_sign'],
			[/:heavy_division_sign:/g, 'heavy_division_sign'],
			[/:white_flower:/g, 'white_flower'],
			[/:100:/g, 'onehundred'],
			[/:heavy_check_mark:/g, 'heavy_check_mark'],
			[/:ballot_box_with_check:/g, 'ballot_box_with_check'],
			[/:radio_button:/g, 'radio_button'],
			[/:link:/g, 'link'],
			[/:curly_loop:/g, 'curly_loop'],
			[/:wavy_dash:/g, 'wavy_dash'],
			[/:part_alternation_mark:/g, 'part_alternation_mark'],
			[/:trident:/g, 'trident'],
			[/:black_square:/g, 'black_square'],
			[/:white_square:/g, 'white_square'],
			[/:white_check_mark:/g, 'white_check_mark'],
			[/:black_square_button:/g, 'black_square_button'],
			[/:white_square_button:/g, 'white_square_button'],
			[/:black_circle:/g, 'black_circle'],
			[/:white_circle:/g, 'white_circle'],
			[/:red_circle:/g, 'red_circle'],
			[/:large_blue_circle:/g, 'large_blue_circle'],
			[/:large_blue_diamond:/g, 'large_blue_diamond'],
			[/:large_orange_diamond:/g, 'large_orange_diamond'],
			[/:small_blue_diamond:/g, 'small_blue_diamond'],
			[/:small_orange_diamond:/g, 'small_orange_diamond'],
			[/:small_red_triangle:/g, 'small_red_triangle'],
			[/:small_red_triangle_down:/g, 'small_red_triangle_down'],
			[/:shipit:/g, 'shipit']
		*/
		];

	var _emojis = [];
	for (var i = allEmoji.length; i--;) {
		_emojis.push(
			new plugin.Emoji(
				allEmoji[i][0], 
				allEmoji[i][1]
			)
		);
	}

	return _emojis;
}());

plugin.onMessageInsertion = function (event) {
	var element = Talker.getLastInsertion();

	_.each(plugin.emojis, function (emoji) {
		element.replace(emoji.matcher, emoji.replacementString);
	});
};
