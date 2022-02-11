/** ?stroke - Selects from various adjectives and verbs to return
 *            a phrase such as: "passionately caress"  */
Template.add('stroke', function() {
	const adjective = V.consensual === 1
		? either("열정적으로", "부드럽게")
		: either("소극적으로");
	const verb = V.consensual === 1
		? either("쓰다듬는다", "어루만진다", "만진다", "애무한다", "껴안는다")
		: either("쓰다듬는다", "만진다");
	return `${adjective} ${verb}`;
});
