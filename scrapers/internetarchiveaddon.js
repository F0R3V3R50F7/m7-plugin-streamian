// Archive.org Addon for Streamian | M7 / Movian Media Center
// Author: F0R3V3R50F7
exports.search = function (page, title) {
    var _0xbfc290=_0x4df5;function _0x4df5(_0x2b5d3b,_0x21255c){var _0x1b3cf0=_0x1b3c();return _0x4df5=function(_0x4df5a0,_0x3a5bc2){_0x4df5a0=_0x4df5a0-0x1ab;var _0x2ae28b=_0x1b3cf0[_0x4df5a0];return _0x2ae28b;},_0x4df5(_0x2b5d3b,_0x21255c);}(function(_0x1982a3,_0x3da829){var _0x1d2990=_0x4df5,_0x185400=_0x1982a3();while(!![]){try{var _0x121e03=parseInt(_0x1d2990(0x1bb))/0x1+-parseInt(_0x1d2990(0x1b8))/0x2*(-parseInt(_0x1d2990(0x1d6))/0x3)+parseInt(_0x1d2990(0x1cc))/0x4*(parseInt(_0x1d2990(0x1ca))/0x5)+-parseInt(_0x1d2990(0x1d5))/0x6*(parseInt(_0x1d2990(0x1bc))/0x7)+-parseInt(_0x1d2990(0x1e5))/0x8+-parseInt(_0x1d2990(0x1e4))/0x9+-parseInt(_0x1d2990(0x1b2))/0xa*(-parseInt(_0x1d2990(0x1c2))/0xb);if(_0x121e03===_0x3da829)break;else _0x185400['push'](_0x185400['shift']());}catch(_0x533a08){_0x185400['push'](_0x185400['shift']());}}}(_0x1b3c,0x92f5b));var relevantTitlePartMatch=title[_0xbfc290(0x1be)](/^(.*?)(?:\sS\d{2}E\d{2}|\s\d{4})/i),relevantTitlePart=relevantTitlePartMatch[0x1]['trim']()['toLowerCase']()[_0xbfc290(0x1ab)](/\./g,'\x20')[_0xbfc290(0x1ab)](/[\-:]/g,'');page[_0xbfc290(0x1af)]=!![];function _0x1b3c(){var _0x588dba=['bad\x20santa','length','274838nlBWfG','14LVUwqC','name','match','trailer\x20park\x20boys','mediatype','identifier','6743011VRkICt','indexOf','.mkv','doopey\x20poopy','thesimpletons\x202','sort','parse','\x20-\x20','246335hWAqVA','response','8jHzzrR','.mov','the\x20simpsons','Movie\x20Trailer','H265Filter','trailer\x20park\x20boys\x20the\x20animated\x20series','push','king-of-the-hill13seasons','test','296124wMPEAX','148497FfBqPm','Unknown','trains\x20and\x20automobiles','httpReq','uncle\x20buck','format','quality','https://archive.org/download/','docs','.wmv','toLowerCase','duel_1971.mp4','trailer\x20park\x20boys\x20jail','json','2116953lwNcKy','7927856QzCLni','title','replace','split','duel','sqjeargbrmdmkfm0pgf','loading','.mp4','files','10OZHkuM','item','toString','trailer\x20park\x20boys\x20out\x20of\x20the\x20park','.avi','every','38uZMEkA'];_0x1b3c=function(){return _0x588dba;};return _0x1b3c();}var query=title,episodeIdentifier=query[_0xbfc290(0x1be)](/s\d+e\d+/gi),identifier;if(!episodeIdentifier)var identifier=query[_0xbfc290(0x1be)](/\d{4}/i);if(query[_0xbfc290(0x1e0)]()[_0xbfc290(0x1c3)]('king\x20of\x20the\x20hill')!==-0x1)modifiedQuery=_0xbfc290(0x1d3);else{if(query[_0xbfc290(0x1e0)]()[_0xbfc290(0x1c3)](_0xbfc290(0x1bf))!==-0x1)modifiedQuery=_0xbfc290(0x1c5);else{if(query[_0xbfc290(0x1e0)]()[_0xbfc290(0x1c3)](_0xbfc290(0x1ce))!==-0x1)modifiedQuery=_0xbfc290(0x1c6);else{if(query[_0xbfc290(0x1e0)]()['indexOf'](_0xbfc290(0x1b9))!==-0x1)modifiedQuery=_0xbfc290(0x1ae);else episodeIdentifier?modifiedQuery=relevantTitlePart:modifiedQuery=query;}}}var apiUrl='https://archive.org/advancedsearch.php',args={'q':modifiedQuery,'fl':[_0xbfc290(0x1c1),_0xbfc290(0x1e6),_0xbfc290(0x1c0),'subject',_0xbfc290(0x1db)],'sort':'downloads\x20desc','rows':0x23,'page':0x1,'output':_0xbfc290(0x1e3)};try{var response=showtime['httpReq'](apiUrl,{'args':args}),json=JSON[_0xbfc290(0x1c8)](response[_0xbfc290(0x1b4)]());if(json['response']&&json[_0xbfc290(0x1cb)]['docs']&&json[_0xbfc290(0x1cb)]['docs']['length']>0x0){var results=[],matchedFiles=[],nonMatchedFiles=[],videoExtensions=[_0xbfc290(0x1b0),_0xbfc290(0x1b6),_0xbfc290(0x1c4),_0xbfc290(0x1cd),_0xbfc290(0x1df),'.flv'],cleanedQuery=relevantTitlePart;for(var i=0x0;i<json[_0xbfc290(0x1cb)][_0xbfc290(0x1de)][_0xbfc290(0x1ba)];i++){var doc=json[_0xbfc290(0x1cb)]['docs'][i];if(doc['subject']&&doc['subject']['indexOf'](_0xbfc290(0x1cf))!==-0x1)continue;var itemDetailsUrl='https://archive.org/metadata/'+doc[_0xbfc290(0x1c1)],itemResponse=showtime[_0xbfc290(0x1d9)](itemDetailsUrl),itemJson=JSON[_0xbfc290(0x1c8)](itemResponse['toString']());if(itemJson[_0xbfc290(0x1b1)]){var foundFile=![];for(var j=0x0;j<itemJson[_0xbfc290(0x1b1)][_0xbfc290(0x1ba)];j++){var file=itemJson['files'][j],isVideoFile=![];for(var k=0x0;k<videoExtensions[_0xbfc290(0x1ba)];k++){if(file[_0xbfc290(0x1bd)][_0xbfc290(0x1e0)]()[_0xbfc290(0x1c3)](videoExtensions[k])!==-0x1){isVideoFile=!![];break;}}var titleForCheck=file[_0xbfc290(0x1bd)]['trim']()[_0xbfc290(0x1e0)]()['replace'](/\./g,'\x20')[_0xbfc290(0x1ab)](/[\-:]/g,'');if(titleForCheck[_0xbfc290(0x1c3)](relevantTitlePart)===-0x1)continue;if(!episodeIdentifier&&titleForCheck['indexOf'](identifier)===-0x1)continue;if(query[_0xbfc290(0x1e0)]()[_0xbfc290(0x1c3)](_0xbfc290(0x1ad))!==-0x1&&file[_0xbfc290(0x1bd)][_0xbfc290(0x1e0)]()[_0xbfc290(0x1c3)](_0xbfc290(0x1e1))!==-0x1)continue;if(query[_0xbfc290(0x1e0)]()[_0xbfc290(0x1c3)](_0xbfc290(0x1da))!==-0x1&&file['name'][_0xbfc290(0x1e0)]()[_0xbfc290(0x1c3)]('bbc')!==-0x1)continue;if(query[_0xbfc290(0x1e0)]()[_0xbfc290(0x1c3)](_0xbfc290(0x1d8))!==-0x1&&file[_0xbfc290(0x1bd)][_0xbfc290(0x1e0)]()[_0xbfc290(0x1c3)]('.ia.mp4')===-0x1)continue;var excludeJail=relevantTitlePart[_0xbfc290(0x1c3)](_0xbfc290(0x1e2))===-0x1&&titleForCheck[_0xbfc290(0x1c3)](_0xbfc290(0x1e2))!==-0x1;if(excludeJail)continue;var excludeAnimated=relevantTitlePart[_0xbfc290(0x1c3)]('trailer\x20park\x20boys\x20the\x20animated\x20series')===-0x1&&titleForCheck[_0xbfc290(0x1c3)](_0xbfc290(0x1d1))!==-0x1;if(excludeAnimated)continue;var excludeAnimated=relevantTitlePart[_0xbfc290(0x1c3)](_0xbfc290(0x1b5))===-0x1&&titleForCheck[_0xbfc290(0x1c3)](_0xbfc290(0x1b5))!==-0x1;if(excludeAnimated)continue;if(service[_0xbfc290(0x1d0)]&&/[xXhH]265/i[_0xbfc290(0x1d4)](file[_0xbfc290(0x1bd)]))continue;var quality=_0xbfc290(0x1d7);if(/1080p/i[_0xbfc290(0x1d4)](titleForCheck))quality='1080p';else{if(/720p/i[_0xbfc290(0x1d4)](titleForCheck))quality='720p';else/XviD/i[_0xbfc290(0x1d4)](titleForCheck)&&(quality='480p');}if(episodeIdentifier&&file[_0xbfc290(0x1bd)][_0xbfc290(0x1e0)]()['indexOf'](episodeIdentifier[0x0][_0xbfc290(0x1e0)]())!==-0x1&&isVideoFile){foundFile=!![];var videoLink=_0xbfc290(0x1dd)+doc[_0xbfc290(0x1c1)]+'/'+encodeURIComponent(file[_0xbfc290(0x1bd)]);matchedFiles[_0xbfc290(0x1d2)]({'title':file[_0xbfc290(0x1bd)],'item':videoLink,'quality':quality});}else{if(isVideoFile){var queryWords=cleanedQuery[_0xbfc290(0x1e0)]()[_0xbfc290(0x1ac)](/\s+/);if(queryWords[_0xbfc290(0x1b7)](function(_0x1d45c0){var _0x2f3f8f=_0xbfc290;return file['name'][_0x2f3f8f(0x1e0)]()['indexOf'](_0x1d45c0)!==-0x1;})){var videoLink='https://archive.org/download/'+doc['identifier']+'/'+encodeURIComponent(file[_0xbfc290(0x1bd)]);nonMatchedFiles['push']({'title':file['name'],'item':videoLink,'quality':quality});}}}}}}if(matchedFiles[_0xbfc290(0x1ba)]>0x0)for(var i=0x0;i<matchedFiles[_0xbfc290(0x1ba)];i++){var magnetLink=matchedFiles[i][_0xbfc290(0x1b3)],quality=matchedFiles[i][_0xbfc290(0x1dc)],seederCount='60',item=magnetLink+_0xbfc290(0x1c9)+quality+_0xbfc290(0x1c9)+seederCount;results[_0xbfc290(0x1d2)](item);}else{nonMatchedFiles[_0xbfc290(0x1c7)](function(_0x5f3835,_0x5bfa65){var _0x32cf13=_0xbfc290;return _0x5f3835['title'][_0x32cf13(0x1ba)]-_0x5bfa65[_0x32cf13(0x1e6)]['length'];});if(nonMatchedFiles[_0xbfc290(0x1ba)]>0x0&&!episodeIdentifier)for(var i=0x0;i<nonMatchedFiles[_0xbfc290(0x1ba)];i++){var magnetLink=nonMatchedFiles[i]['item'],quality=nonMatchedFiles[i][_0xbfc290(0x1dc)],seederCount='60',item=magnetLink+_0xbfc290(0x1c9)+quality+'\x20-\x20'+seederCount;results[_0xbfc290(0x1d2)](item);}else return[];}return page[_0xbfc290(0x1af)]=![],results;}else return[];}catch(_0x587da7){return page[_0xbfc290(0x1af)]=![],[];}
};