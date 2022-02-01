package com.ryhnik.mapper;

import com.ryhnik.dto.core.PageDto;
import com.ryhnik.dto.user.UserInputCreateDto;
import com.ryhnik.dto.user.UserOutputDto;
import com.ryhnik.dto.user.UserRoleDto;
import com.ryhnik.entity.User;
import com.ryhnik.entity.UserRole;
import com.ryhnik.entity.UserRoleName;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-01-27T21:29:57+0300",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.2 (Oracle Corporation)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public UserOutputDto toUserOutputDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserOutputDto userOutputDto = new UserOutputDto();

        UserRoleName name = userRoleName( user );
        if ( name != null ) {
            userOutputDto.setRole( name.name() );
        }
        userOutputDto.setId( user.getId() );
        userOutputDto.setFirstName( user.getFirstName() );
        userOutputDto.setLastName( user.getLastName() );
        userOutputDto.setUsername( user.getUsername() );
        userOutputDto.setPassword( user.getPassword() );
        userOutputDto.setEmail( user.getEmail() );
        userOutputDto.setPhone( user.getPhone() );

        return userOutputDto;
    }

    @Override
    public User toUser(UserInputCreateDto dto) {
        if ( dto == null ) {
            return null;
        }

        User user = new User();

        user.setFirstName( dto.getFirstName() );
        user.setLastName( dto.getLastName() );
        user.setUsername( dto.getUsername() );
        user.setPassword( dto.getPassword() );
        user.setPhone( dto.getPhone() );
        user.setEmail( dto.getEmail() );
        user.setRole( userRoleDtoToUserRole( dto.getRole() ) );

        return user;
    }

    @Override
    public PageDto<UserOutputDto> toPagedUserOutputDto(Page<User> users, Pageable pageable) {
        if ( users == null && pageable == null ) {
            return null;
        }

        PageDto<UserOutputDto> pageDto = new PageDto<UserOutputDto>();

        if ( users != null ) {
            pageDto.setContent( userListToUserOutputDtoList( users.getContent() ) );
            pageDto.setSize( users.getSize() );
            pageDto.setTotalElements( users.getTotalElements() );
            pageDto.setTotalPages( users.getTotalPages() );
            pageDto.setEmpty( users.isEmpty() );
            pageDto.setFirst( users.isFirst() );
            pageDto.setLast( users.isLast() );
        }
        if ( pageable != null ) {
            pageDto.setPageNumber( pageable.getPageNumber() );
        }

        return pageDto;
    }

    private UserRoleName userRoleName(User user) {
        if ( user == null ) {
            return null;
        }
        UserRole role = user.getRole();
        if ( role == null ) {
            return null;
        }
        UserRoleName name = role.getName();
        if ( name == null ) {
            return null;
        }
        return name;
    }

    protected UserRole userRoleDtoToUserRole(UserRoleDto userRoleDto) {
        if ( userRoleDto == null ) {
            return null;
        }

        UserRole userRole = new UserRole();

        return userRole;
    }

    protected List<UserOutputDto> userListToUserOutputDtoList(List<User> list) {
        if ( list == null ) {
            return null;
        }

        List<UserOutputDto> list1 = new ArrayList<UserOutputDto>( list.size() );
        for ( User user : list ) {
            list1.add( toUserOutputDto( user ) );
        }

        return list1;
    }
}
