UPDATE [dbo].[users]
    [fullname]=@fullname,
    [gender]=@gender,
    [email]=@email,
    [phone_num]=@phone_num,
    [address]=@address,
    [password]=@password
WHERE [id]=@id

SELECT * FROM [dbo].[users]
WHERE [id]=@id