function trBeastdesc(beastdesc, post, sep) 
{
	if (!setup.trBeasttypeList)
	{
		trinit_beastsList();
		trinit_beastAdjList();
	}
	if (!setup.trGenderList)
		trinit_genderNoun();
	
	T.trResult = "";
	delete T.postNum;
	delete T.trPost;
	let tempArray = beastdesc.split(' ');

    for(let i = 0; i < tempArray.length; i++)
	{
		if (i)
			T.trResult += " ";
		
        if (setup.trBeastAdjList[tempArray[i]])
		{
            T.trResult += setup.trBeastAdjList[tempArray[i]];
		}
		else if (setup.trGenderList[tempArray[i]])
		{
            T.trResult += setup.trGenderList[tempArray[i]].ko;
            T.postNum = setup.trGenderList[tempArray[i]].post;
		}
        else if (setup.trBeasttypeList[tempArray[i]])
		{
            T.trResult += setup.trBeasttypeList[tempArray[i]].ko;
            T.postNum = setup.trBeasttypeList[tempArray[i]].post;
		}
        else
		{
            T.trResult = `<<span class="red">>trBeastdesc: ${beastdesc} is undefined: ${tempArray[i]}<</span>>`;
            break;
		}
    }
	if (T.postNum !== undefined)
		trPost(T.postNum, post, sep);
	return T.trResult;
}
window.trBeastdesc = trBeastdesc;
DefineMacro("trBeastdesc", trBeastdesc);