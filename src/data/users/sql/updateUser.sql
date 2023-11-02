UPDATE [dbo].[users]
SET [role_id]=@role_id,
    [fullname]=@fullname,
    [gender]=@gender,
    [email]=@email,
    [phone_num]=@phone_num,
    [address]=@address,
    [passwork]=@passwork,
    [deleted]=@deleted
WHERE [id]=@id

SELECT * FROM [dbo].[users]
WHERE [id]=@id