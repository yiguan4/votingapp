


$(document).ready(function() {
$('.modal').modal();



	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	abi = JSON.parse('[{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"candidateNames","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')
	VotingContract = web3.eth.contract(abi);
	contractInstance = VotingContract.at('0xA32c9953785fF7c8BDEcaF35C965Af2f14E5D742');
	

	function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
	}
	

	function disable() {
			$('#vote1').addClass( "disabled" );
		    $('#vote2').addClass( "disabled" );
		    $('#vote3').addClass( "disabled" );
		    $('#vote4').addClass( "disabled" );
		    
		    //logout
		    document.cookie = "show=disney; expires=Thu, 11 May 2022 12:00:00 UTC";
		    document.cookie = "id=disney; expires=Thu, 11 May 2022 12:00:00 UTC";
		    window.location = '/app';


	}

	$('#vote1').click(function(){
		contractInstance.voteForCandidate('Snow', {from: web3.eth.accounts[0]}, function() {
		    alert('vote submited to Sleeping Beauty');
		    disable();
		    $('#loc_info').text('Vote submited successfully to Sleeping Beauty')

		});
	})
	$('#vote2').click(function(){
		contractInstance.voteForCandidate('Alice', {from: web3.eth.accounts[0]}, function() {
		    alert('vote submited to Alice In The Wonderland');
		     disable();
		     $('#loc_info').text('Vote submited successfully to Alice In The Wonderland')
		});
	})
	$('#vote3').click(function(){
		contractInstance.voteForCandidate('Monster', {from: web3.eth.accounts[0]}, function() {
		    alert('vote submited to Monster Inc.');
		     disable();
		      
		      $('#loc_info').text('Vote submited successfully to Monster Inc.')
		});
	})
	$('#vote4').click(function(){
		contractInstance.voteForCandidate('Frozen', {from: web3.eth.accounts[0]}, function() {
		    alert('vote submited to Frozen');
		     disable();
		     $('#loc_info').text('Vote submited successfully to Frozen')
		});
	})
});