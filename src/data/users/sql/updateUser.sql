UPDATE [dbo].[users]
SET [fullname]=@fullname,
    [gender]=@gender,
    [email]=@email,
    [phone_num]=@phone_num,
    [address]=@address
WHERE [id]=@id

SELECT * FROM [dbo].[users]
WHERE [id]=@id