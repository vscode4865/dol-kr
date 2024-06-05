function trNPCdesc(npcinfo, post, sep)
{
	if (!setup.trNamedNPCList)
		trinit_namedNPC();
	if (!setup.trBeasttypeList)
	{
		trinit_beastsList();
		trinit_beastAdjList();
	}
	if (!setup.trNPCdescAdjList)
		trinit_NPCdescAdj();
	if (!setup.trGenderList)
		trinit_genderNoun();
	if (!setup.trRoleList)
		trinit_roleList();

    delete T.trResult;
	let name;
	if (Array.isArray(npcinfo))
		name = npcinfo[0];
	else if (typeof(npcinfo) === "string")
		name = npcinfo;

	if (name)
	{
		let tempArray;
		/* namedNPC? */
		trNamedNPCInner(name);
		if (T.trResult && post)
		{
			trPost(T.postNum, post, sep);
		}
		else
		{
			tempArray = name.split(' ');
            for(let i = 0; i < tempArray.length; i++)
			{
				/* beast? */
                if (setup.trBeasttypeList.hasOwnProperty(tempArray[i]))
				{
                    trBeastdesc(name, post, sep);
                    break;
				}
            }
        }
		
        if (!T.trResult)
		{
			/* Adjective + genderNoun? */
            if (setup.trNPCdescAdjList[tempArray[0]])
                T.trResult = setup.trNPCdescAdjList[tempArray[0]];
            else if (setup.trBeastAdjList[tempArray[0]])
				T.trResult = setup.trBeastAdjList[tempArray[0]];
			else if (!tempArray[0])
				T.trResult = tempArray[0];
			else
                T.trResult = "";

			if (T.trResult && tempArray.length >= 3)
			{
				/* ex: minor demon */
				if (setup.trNPCdescAdjList[tempArray[1]])
				{
					T.trResult += " "+setup.trNPCdescAdjList[tempArray[1]];
					tempArray.deleteAt(0);
				}
			}

			let found = setup.trRoleList[tempArray[1]];
			if (!found)
				found = setup.trGenderList[tempArray[1]];

            if (found)
			{
                if (!tempArray[0])
                    T.trResult = found.ko;
                else
                    T.trResult += " "+found.ko;
                
                if (post)
                    trPost(found.post, post, sep)
            }
        }
    }

    if (!T.trResult)
	{
        if(!npcinfo)
            T.trResult = "";
        else
            T.trResult = `trNPCdesc에서 찾지 못함: ${npcinfo}`;
	}
    return T.trResult;
}
window.trNPCdesc = trNPCdesc;
DefineMacro("trNPCdesc", trNPCdesc);

function trNPCname(npcinfo, post, sep)
{
	let name;
	if (npcinfo)
	{
		if (typeof(npcinfo) === "number")
		{
			name = V.NPCList[Number(npcinfo)].name;
		}
		else if (typeof(npcinfo) === "string")
		{
			if (setup.trPostsList[npcinfo])
			{
				sep = post;
				post = npcinfo;
				name = V.NPCList[0].name;
			}
			else
				name = npcinfo;
		}
		else
			name = npcinfo[0];	// maybe array

		if (!setup.trNPCnameList)
			trinit_NPCname() // 대신 trNPCdesc에 맡겨버릴까?
		
		let found;
		if (typeof(name) !== "string")
		{
			found = {};
			found.koname = `<span class='red'>에러: trNPCname: name이 잘못되었습니다. name:${name}, args[0]:${npcinfo}</span>`
			post = false;
		}
		else
			found = setup.trNPCnameList[name];
		
		if (!found)
		{
			if(!setup.trNamedNPCList)
				trinit_namedNPC();

			trNamedNPCInner(name);
			if (T.trResult)
			{
				found = {};
				found.koname = T.trResult;
				found.post = T.postNum;
			}
		}
		if (!found) // 대신 trNPCdesc에 맡겨버릴까?
		{
			found = {};
			found.koname = name;
			found.post = getPostNum(name);
		}
		
		T.trResult = found.koname;
		if (post)
			trPost(found.post, post, sep);
	}
	else
		T.trResult = "";

	return T.trResult;
}
window.trNPCname = trNPCname;
DefineMacro("trNPCname", trNPCname);
